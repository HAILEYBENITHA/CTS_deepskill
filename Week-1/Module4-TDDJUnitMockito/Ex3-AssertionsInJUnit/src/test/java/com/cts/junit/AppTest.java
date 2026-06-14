package com.cts.junit;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class AppTest {

    @Test
    void testAssertions() {

        assertEquals(10, 5 + 5);
        assertTrue(20 > 10);
        assertFalse(5 > 10);
        assertNotNull("CTS");
        assertNull(null);
    }
}