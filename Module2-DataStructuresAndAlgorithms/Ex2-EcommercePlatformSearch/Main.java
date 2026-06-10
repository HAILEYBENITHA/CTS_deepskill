class Product {
    int productId;
    String productName;

    Product(int id, String name) {
        productId = id;
        productName = name;
    }
}
public class Main {
    public static void linearSearch(Product[] products, String key) {
        for(int i=0;i<products.length;i++) {
            if(products[i].productName.equalsIgnoreCase(key)) {
                System.out.println(key + " Found");
                return;
            }
        }
        System.out.println(key + " Not Found");
    }
    public static void main(String[] args) {
        Product[] products = {
            new Product(1,"Laptop"),
            new Product(2,"Phone"),
            new Product(3,"Watch"),
            new Product(4,"Shoes"),
            new Product(5,"TV")
        };
        linearSearch(products,"Phone");
    }
}