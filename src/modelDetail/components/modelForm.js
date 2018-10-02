import React from 'react';
import Radium from 'radium';
// import colors from '../../common/colors';
import mediaQueries from '../../common/mediaQueries';

const styles = {
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -7.5,
    },
    field: {
        display: 'table',
        width: '100%',
        textAlign: 'left',
    },
    label: {
        display: 'table-cell',
        width: '120px',
        fontSize: 12,
    },
    input: {
        display: 'table-cell',
        width: '100%',
        height: 24,
        fontSize: '12px',
        lineHeight: 24,
        padding: 0,
        textIndent: 8,
        border: 0,
        outline: '1px solid #DDD',
    },
    select: {
        display: 'table-cell',
        width: '100%',
        height: 24,
        fontSize: '12px',
        lineHeight: 24,
        border: 0,
        background: 'none',
        outline: '1px solid #DDD',
        padding: 0,
    },
    submit: {
        display: 'table',
        width: '100%',
        textAlign: 'center',
        marginTop: 15,
    },
    oneCol: {
        flex: '1 1 90%',
        margin: '0 15px 15px 0',
        [mediaQueries.breakpointSmall]: {
            margin: '0 15px 0 0',
        }
    },
    twoCol: {
        flex: '1 1 45%',
        margin: '0 15px 15px 0',
        [mediaQueries.breakpointSmall]: {
            flex: '1 1 99%',
            width: '99%',
            margin: '0 15px 0 0',
        }
    }
}

function ModelForm(props) {
    return (
        <section>
            <form style={styles.form}>
                <div style={styles.oneCol}>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="title">Title</label>
                        <input style={styles.input} type="text" name="title" placeholder="" defaultValue={props.model.title} required />
                    </div>
                </div>
                <div style={styles.twoCol}>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="modelMfg">Model mfg.</label>
                        <input style={styles.input} type="text" name="modelMfg" placeholder="" defaultValue={props.model.modelMfg} required />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="scale">Scale</label>
                        <input style={styles.input} type="text" name="scale" placeholder="" defaultValue={props.model.scale} required />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="color">Color</label>
                        <input style={styles.input} type="text" name="color" placeholder="" defaultValue={props.model.color} />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="condition">Condition</label>
                        <select style={styles.select} name="condition" placeholder="" defaultValue={props.model.condition}>
                            <option value="Mint">Mint</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Poor">Poor</option>
                        </select>
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="packaging">Packaging</label>
                        <select style={styles.select} name="packaging" placeholder="" required defaultValue={props.model.packaging}>
                            <option value="Mint Card">Mint Card</option>
                            <option value="Card">Card</option>
                            <option value="Mint Box">Mint Box</option>
                            <option value="Box">Box</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                </div>
                <div style={styles.twoCol}>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="mfgYear">Year of mfg.</label>
                        <input style={styles.input} type="number" name="mfgYear" placeholder="" defaultValue={props.model.mfgYear} />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="purchaseYear">Purchase year</label>
                        <input style={styles.input} type="number" name="purchaseYear" placeholder="" defaultValue={props.model.purchaseYear} />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="purchasePrice">Purchase price</label>
                        <input style={styles.input} type="number" name="purchasePrice" min="0.01" step="0.01" max="2500" placeholder="" defaultValue={props.model.purchasePrice} />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="estValue">Estimated value</label>
                        <input style={styles.input} type="number" name="estValue" min="0.01" step="0.01" max="2500" placeholder="" defaultValue={props.model.estValue} />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="quantity">Quantity owned</label>
                        <input style={styles.input} type="number" name="quantity" placeholder="" defaultValue={props.model.quantity} required />
                    </div>
                </div>
                <div style={styles.oneCol}>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="status">Status</label>
                        <select style={styles.select} name="status" placeholder="" required defaultValue={props.model.status}>
                            <option value="Not for sale">Not for sale</option>
                            <option value="For sale">For sale</option>
                            <option value="Sold">Sold</option>
                            <option value="Wanted">Wanted</option>
                        </select>
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="notes">Notes</label>
                        <input style={styles.input} type="text" name="notes" placeholder="" defaultValue={props.model.notes} />
                    </div>
                    <div style={styles.field}>
                        <label style={styles.label} htmlFor="tags">Tags</label>
                        <input style={styles.input} type="text" name="tags" placeholder="" defaultValue={props.model.tags} />
                    </div>
                    <div styles={styles.submit}>
                        <button type="submit">Save Changes</button>
                    </div>
                </div>
            </form>
        </section >
    );
}

export default Radium(ModelForm);