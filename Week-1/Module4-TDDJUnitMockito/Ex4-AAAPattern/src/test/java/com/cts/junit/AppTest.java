package com.cts.junit;
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
public class AppTest {
    private int num1;
    private int num2;
    @BeforeEach
    void setUp() {
        System.out.println("Setup Method");
        num1 = 10;
        num2 = 20;
    }
    @Test
    void testAddition() {
        int expected = 30;
        int actual = num1 + num2;
        assertEquals(expected, actual);
    }
    @AfterEach
    void tearDown() {
        System.out.println("Teardown Method");
    }
}