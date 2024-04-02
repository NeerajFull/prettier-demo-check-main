

export default function SearchApp() {
    function SearchOnKeyUp(event: any): void {
        console.log("I am just now seraching", event.target.value);
        //      throw new Error("Function not implemented.");
    }

    return (
        <div>
            <input onKeyDown={SearchOnKeyUp}></input>

            <h3>This is to search something
                Which is better than amazon search. 
                {["s","t"].map((e) => {
                    <h2>{e}</h2>
                })}
            </h3>

        </div>
    )



}