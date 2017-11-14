/**
 * Created by user on 14.11.2017.
 */
var XMLdata = {
    loaded: false,
    content: '<data>some data</data>'
};

var doc = new jsPDF();

function generatePDF() {
    doc.fromHTML(XMLdata.content, 10, 10, {'width': 180});
    doc.save('Diploma.pdf');
}
