package com.github.mhzhou95.MingChatAppServer.repository;

import com.github.mhzhou95.MingChatAppServer.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByUsernameEqualsAndPasswordEquals(String username, String password);
}
