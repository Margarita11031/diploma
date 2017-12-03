/**
 * Created by user on 14.11.2017.
 */
var XMLdata = {
    loaded: false,
    content: '<data>some data</data>'
};


window.onload = function() {
    document.getElementById('xml_file').addEventListener('change', handleFileSelect, false);
};

function handleFileSelect(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
        XMLdata.loaded = true;
        XMLdata.content = reader.result;
    };
    reader.readAsText(input.files[0]);
}

function generatePDF() {
    var doc = new jsPDF();
    doc.fromHTML(XMLdata.content, 10, 10, {'width': 180});
    doc.save('Diplomas.pdf');
}
