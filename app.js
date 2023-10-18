function lifeInWeeks(age) {
    const yearRemaining = 90 - age
    let days = yearRemaining * 365
    let weeks = yearRemaining * 52
    let months = yearRemaining * 12

    console.log('You have' + days + 'days', weeks + 'weeks' + 'and' + months + 'month left')
}

lifeInWeeks(30)