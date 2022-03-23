function getName(name) {
    try {
        if (!name) {
            throw new Error('No name')

        }
    } catch (err) {
        console.log(err)
    }
}

