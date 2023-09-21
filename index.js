// function to list food items with or without sepecified category
function listFood(arr, category = '') {

    let result = arr.filter(value => {
        return value.category.includes(category)
    })

    return result
}

// function to filter data by calorie either above 100 or below 
function filterByCal(arr, area = 'above') {

    let result = arr.filter(value => {
        if (area === 'above') return value.calorie > 100
        else return value.calorie < 100
    })

    return result
}


// function to sort array by protien in descending order or by cab in ascending
function sortBy(data, category) {
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
    const query2 = listFood(data, 'Fruit')
    const query3 = listFood(data, 'Vegetable')
    const query4 = listFood(data, 'Protein')
    const query5 = listFood(data, 'Nuts')
    const query6 = listFood(data, 'Grain')
    const query7 = listFood(data, 'Dairy')

    // above 100 cal
    const query8 = filterByCal(data, 'above')
    const query9 = filterByCal(data, 'below')


    // highest protien to lowest
    const query10 = sortBy(data, 'protien')

    // lowest cab to highest
    const query11 = sortBy(data, 'cab')
}

main()
