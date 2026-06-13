interface Document {
    void open();
}
class WordDocument implements Document {
    public void open() {
        System.out.println("Word Document Opened");
    }
}
class PdfDocument implements Document {
    public void open() {
        System.out.println("PDF Document Opened");
    }
}
class ExcelDocument implements Document {
    public void open() {
        System.out.println("Excel Document Opened");
    }
}
class DocumentFactory {
    public Document createDocument(String type) {
        if (type.equalsIgnoreCase("Word")) {
            return new WordDocument();
        }
        else if (type.equalsIgnoreCase("PDF")) {
            return new PdfDocument();
        }
        else if (type.equalsIgnoreCase("Excel")) {
            return new ExcelDocument();
        }
        return null;
    }
}
public class Main {
    public static void main(String[] args) {
        DocumentFactory factory = new DocumentFactory();
        Document doc1 = factory.createDocument("Word");
        doc1.open();
        Document doc2 = factory.createDocument("PDF");
        doc2.open();
        Document doc3 = factory.createDocument("Excel");
        doc3.open();
    }
}