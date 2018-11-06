import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import modelInput from './modelInput';
import modelSelect from './modelSelect';
import modelTextArea from './modelTextArea';
import { required, nonEmpty, isCurrency, isCommaDelimited } from '../../../utils/validators';
import { updateModelData, deleteModel } from '../../../modules/modelDetail';

import './modelForm.css';

class ModelFormComponent extends React.Component {

    render() {

        const {
            handleSubmit,
            error,
            pristine,
            submitting,
            loggedIn,
            deleteModel,
            modelId
        } = this.props;
        
        const readOnly = { readOnly: !loggedIn }

        let err;
        if (error) {
            err = (
                <div className="form-error" aria-live="polite">
                    {err}
                </div>
            );
        }

        const conditionOptions = {
            options: [
                {
                    text: 'Mint',
                    value: 'Mint'
                },
                {
                    text: 'Excellent',
                    value: 'Excellent'
                },
                {
                    text: 'Good',
                    value: 'Good'
                },
                {
                    text: 'Fair',
                    value: 'Fair'
                },
                {
                    text: 'Poor',
                    value: 'Poor'
                },
            ],
        }

        const packageOptions = {
            options: [
                {
                    text: 'Mint Card',
                    value: 'Mint Card'
                },
                {
                    text: 'Card',
                    value: 'Card'
                },
                {
                    text: 'Mint Box',
                    value: 'Mint Box'
                },
                {
                    text: 'Box',
                    value: 'Box'
                },
                {
                    text: 'None',
                    value: 'None'
                },
            ],
        }

        const statusOptions = {
            options: [
                {
                    text: 'For Sale',
                    value: 'For sale'
                },
                {
                    text: 'Not For Sale',
                    value: 'Not for sale'
                },
                {
                    text: 'Wanted',
                    value: 'Wanted'
                },
                {
                    text: 'Sold',
                    value: 'Sold'
                },
            ],
        }

        return (
            <section>
                <form
                    // // id='model-form'
                    className="modelForm"
                    onSubmit={handleSubmit}
                >
                    {err}
                    <div className='threeCol'>
                        <Field
                            label='Title'
                            component={modelInput}
                            type="text"
                            name="title"
                            id="title"
                            autoComplete='on'
                            validate={[required, nonEmpty]}
                            props={readOnly}
                        />
                        <Field
                            label='Model Manufacturer'
                            component={modelInput}
                            type="text"
                            name="modelMfg"
                            id="modelMfg"
                            autoComplete='on'
                            props={readOnly}
                        />
                        <Field
                            label='Scale'
                            component={modelInput}
                            type="text"
                            name="scale"
                            id="scale"
                            autoComplete='on'
                            props={readOnly}
                        />
                        <Field
                            label='Color'
                            component={modelInput}
                            type="text"
                            name="color"
                            id="color"
                            autoComplete='on'
                            props={readOnly}
                        />
                    </div>
                    <div className='threeCol'>
                        <Field
                            label='Model Condition'
                            component={modelSelect}
                            name="condition"
                            id="condition"
                            props={{ ...conditionOptions, ...readOnly }}
                            autoComplete='off'
                            validate={[required, nonEmpty]}
                        />
                        <Field
                            label='Packaging'
                            component={modelSelect}
                            name="packaging"
                            id="packaging"
                            props={{ ...packageOptions, ...readOnly }}
                            autoComplete='off'
                            validate={[required, nonEmpty]}
                        />
                        <Field
                            label='Year Manufactured'
                            component={modelInput}
                            type="number"
                            name="mfgYear"
                            id="mfgYear"
                            autoComplete='off'
                            props={readOnly}
                        />
                        <Field
                            label='Year Purchased'
                            component={modelInput}
                            type="number"
                            name="purchaseYear"
                            id="purchaseYear"
                            autoComplete='off'
                            props={readOnly}
                        />
                    </div>
                    <div className='threeCol'>
                        <Field
                            label='Purchase Price'
                            component={modelInput}
                            type="number"
                            name="purchasePrice"
                            id="purchasePrice"
                            autoComplete='off'
                            validate={[isCurrency]}
                            step='0.01'
                            props={readOnly}
                        />
                        <Field
                            label='Estimated Value'
                            component={modelInput}
                            type="number"
                            name="estValue"
                            id="estValue"
                            autoComplete='off'
                            validate={[isCurrency]}
                            step='0.01'
                            props={readOnly}
                        />
                        <Field
                            label='Asking Price'
                            component={modelInput}
                            type="number"
                            name="askingPrice"
                            id="askingPrice"
                            autoComplete='off'
                            validate={[isCurrency]}
                            step='0.01'
                            props={readOnly}
                        />
                        <Field
                            label='Status'
                            component={modelSelect}
                            name="status"
                            id="status"
                            props={{ ...statusOptions, ...readOnly }}
                            autoComplete='off'
                            validate={[required, nonEmpty]}
                        />
                    </div>
                    <div className='oneCol'>
                        <Field
                            label='Notes'
                            component={modelTextArea}
                            type="textarea"
                            name="notes"
                            id="notes"
                            autoComplete='on'
                            props={readOnly}
                        />
                        <Field
                            label='Tags'
                            component={modelInput}
                            type="text"
                            name="tags"
                            id="tags"
                            autoComplete='off'
                            props={readOnly}
                            validate={[isCommaDelimited]}
                        />
                    </div>

                    {loggedIn
                        ? <button type='submit' className='modelSubmit' disabled={pristine || submitting}>
                            Save Changes
                    </button>
                        : null
                    }
                </form>
                {loggedIn
                    ? <p className='deleteButton' onClick={() => {
                        if (window.confirm('Are you sure you wish to delete this item?')) {
                            deleteModel(modelId)
                        }
                    }}>
                        Delete
                    </p>
                    : null
                }
            </section>
        )
    }
}
// }


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
const ModelForm = reduxForm({
    form: 'ModelForm', // a unique identifier for this form
    enableReinitialize: true
})(ModelFormComponent)

const mapStateToProps = state => ({
    initialValues: state.modelDetail.model,
    modelId: state.modelDetail.model._id
})

const mapDispatchToProps = dispatch => ({
    onSubmit: values => { dispatch(updateModelData(values)) },
    deleteModel: modelId => { dispatch(deleteModel(modelId)) },
})

export default Radium(connect(mapStateToProps, mapDispatchToProps)(ModelForm))