const firstNameChange = (e) => {
    // console.log(e);
    // console.log(e.target.value);
    const val = e.target.value;
    if (val.length > 2) {
        console.log('correct');
    }
}

// function submitForm(e)
// {   
//     e.preventDefault();
//     const t = e.target;
//     // console.dir(typeof(t));
//     for(let i=0; i<2; i++)
//     {
//         console.dir(t[i].value);
//     }
//     console.dir(e.target);
// }

function submitForm(e) {
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    };
    // console.dir(typeof(t));
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        if (ty != 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;
            if (ty == 'checkbox' && t[i].checked) {
                res.hobbies.push(vl);
            }
            if (ty != 'checkbox') {
                res[nm] = vl;
            }
        }
    }
    console.log(res);
}
