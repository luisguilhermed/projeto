
//{1 : ["1", "2"], 2 : ["FACE", "ICEX", "DIREITO"]}

function getUniqueValuesFromColumn() {

    var unique_col_values_dict = {}

    allFilters = document.querySelectorAll(".table-filter")
    allFilters.forEach(filter_i => {
        col_index = filter_i.parentElement.innerHTML;
        alert(col_index)

    });
};