package com.cts.logging;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class App {
    private static final Logger logger =
            LoggerFactory.getLogger(App.class);
    public static void main(String[] args) {
        logger.warn("This is a warning message");
        logger.error("This is an error message");
    }
}