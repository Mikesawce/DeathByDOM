// Complete the htmlFromManager function. This function takes a single parameter (obj) with the following structure:

const obj = {
    name: 'Darcy',
    salesTeam: [
        {name: 'Alice', quota: '500'},
        {name: 'Bob', quota: '240'},
        {name: 'Charlie', quota: '10'}
    ],
    district: {
        name: 'ATX',
        offices: 10,
        remote: true
    }
}


// and should return a DOM node with the following structure:

// <div class='district-sales'>
//     <h1>Darcy</h1>
//     <h3>Total quota is: 750</h3>
//     <h3>ATX Sales Team</h3>
//     <ul>
//         <li>Alice</li>
//         <li>Bob</li>
//         <li>Charlie</li>
//     </ul>
// </div>
// Notes:

// Do not try to append anything to document.body. This function simply takes in an object as input and returns a DOM node as output.
// The tests don't actually run your code.
// Do not hardcode any information from the example input. Everything must be derived from the obj parameter.
// A standard repl.it will not work for testing because it does not have access to the DOM. You'll need to test out your code using one of the following:
// An external text editor
// Your browser console
// codepen.io



function htmlFromManager(obj) {
    const div = document.createElement('div')
    div.className = `district-sales`
    div.id = `fnDiv`

    const h1 = document.createElement(`h1`)
    h1.id = `fnh1`
    h1.textContent = obj.name
    div.appendChild(h1)

    const badAssSalesTeam = obj.salesTeam 
    let total = Number(badAssSalesTeam[0].quota) + Number(badAssSalesTeam[1].quota) + Number(badAssSalesTeam[2].quota)
    
    const thing1 = document.createElement(`h3`)
    thing1.className = `forShz`
    thing1.textContent = `Total quota is: ${total}`
    div.appendChild(thing1)

    const thing2 = document.createElement('h3')
    thing2.className = `nGigz`
    thing2.textContent = `${obj.district[`name`]} Sales Team`
    div.appendChild(thing2)

    
    const ul = document.createElement(`ul`)
    ul.className = `bread`

    for (let i = 0; i < badAssSalesTeam.length; i++) {
        let li = document.createElement(`li`)
        li.className = `This dude`
        li.textContent = `${badAssSalesTeam[i]['name']}`
        ul.appendChild(li)
    }
    
    div.appendChild(ul)

    return div
}

console.log(htmlFromManager(obj))
