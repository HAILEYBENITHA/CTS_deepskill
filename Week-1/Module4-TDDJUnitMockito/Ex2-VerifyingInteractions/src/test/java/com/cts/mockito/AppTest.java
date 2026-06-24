package com.cts.mockito;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
interface UserRepository {
    void saveUser(String name);
}
class UserService {
    private UserRepository repository;
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
    public void registerUser(String name) {
        repository.saveUser(name);
    }
}
public class AppTest {
    @Test
    void testVerifyInteraction() {
        UserRepository mockRepo = mock(UserRepository.class);
        UserService service = new UserService(mockRepo);
        service.registerUser("Hailey");
        verify(mockRepo).saveUser("Hailey");
    }
}