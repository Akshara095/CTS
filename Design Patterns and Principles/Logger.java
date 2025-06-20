// Logger.java
public class Logger {
    // Eagerly-created single instance
    private static final Logger instance = new Logger();

    // Private constructor to prevent new instances
    private Logger() {}

    // Public method to access the single instance
    public static Logger getInstance() {
        return instance;
    }

    // Sample method
    public void log(String message) {
        System.out.println("LOG: " + message);
    }

    // Test the Singleton
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First log message");
        logger2.log("Second log message");

        // Verify that both are the same instance
        System.out.println(
            "logger1 and logger2 are the same? " + (logger1 == logger2)
        );
    }
}
