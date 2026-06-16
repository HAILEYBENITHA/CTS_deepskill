class Logger {
    // Single object
    private static Logger instance;
    private Logger() {
        System.out.println("Logger Object Created");
    }
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    public void log(String message) {
        System.out.println(message);
    }
}
public class Main {
    public static void main(String[] args) {
        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();
        log1.log("First Message");
        log2.log("Second Message");
        if (log1 == log2) {
            System.out.println("Only one Logger object created");
        } else {
            System.out.println("Different Logger objects created");
        }
    }
}