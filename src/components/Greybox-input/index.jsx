function Greybox({handleChange}) {

    return(
        <div>
            <label htmlFor="bill"></label>
            <input type="text" name="bill" id="bill" class="bg-slate-100" placeholder="0" max="999" onChange={handleChange}></input>
        </div>
    )
}

export default Greybox