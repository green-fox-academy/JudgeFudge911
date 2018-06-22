function thumbnailClick() {
    console.log("thumbnailclicked");
    photos.forEach(e => {
        if (e.indexOf(1)) {
            console.log(`i wasn't active ${e.id}`);
            e.isActive = true;
        } else if (e.isActive) {
            console.log(`i was active ${e.id}`);
            e.isActive = false;
        }
    })
}