let grade = [
    {grade : "A", nilai : "100"}
    {grade : "B", nilai : "85"}
    {grade : "C", nilai : "75"}
]
grade.forEach(function(item) {
    let hasilgrade = "";

    switch (item.grade) {
        case "A"
        hasilgrade ="sangat baik"
        break;
        case "B"
        hasilgrade ="baik"
        break;
        case "C"
        hasilgrade ="kurang baik"
        break;
        default:
    }
    console.log(`${item.grade} nilai ${hasilgrade}`)
}