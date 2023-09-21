// function to list food items with or without sepecified category
function listFood(arr, category = '') {
    let result = []

    arr.forEach(value => {
        let pattern = `.*${value.category}.*`
        let re = new RegExp(pattern, 'i')
        if (re.test(category) || category === '') result.push({ name: value.foodname, category: value.category })
    })

    return result
}

// function to filter data by calorie either above 100 or below 
function filterByCal(arr, area = 'above') {
    let result = []

    if (area === 'above') {
        arr.forEach(value => {
            if (value.calorie > 100) result.push(value)
        })
    }
    else {
        arr.forEach(value => {
            if (value.calorie < 100) result.push(value)
        })
    }

    return result
}


// function to sort array by protien in descending order or by cab in ascending
function sortBy(data, category) {
    // console.log(data.length)
    let arr = [...data]
    if (category == 'protien') {
        arr.sort((a, b) => b.protiens - a.protiens)
    }
    else {
        arr.sort((a, b) => a.cab - b.cab)
    }

    return arr
}


async function main() {
    // loads data.json file
    const load = await fetch('data.json');
    const data = await load.json()


    // list of food items
    const query1 = listFood(data)
    const query2 = listFood(data, 'fruit')
    const query3 = listFood(data, 'vegetables')
    const query4 = listFood(data, 'protein')
    const query5 = listFood(data, 'nuts')
    const query6 = listFood(data, 'grains')
    const query7 = listFood(data, 'dairy')


    // above 100 cal
    const query8 = filterByCal(data, 'above')
    const query9 = filterByCal(data, 'below')


    // highest protien to lowest
    const query10 = sortBy(data, 'protien')

    // lowest cab to highest
    const query11 = sortBy(data, 'cab')
    console.log(query2)
}

main()
