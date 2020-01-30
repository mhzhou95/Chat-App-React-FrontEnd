package com.github.mhzhou95.MingChatAppServer.repository;

import com.github.mhzhou95.MingChatAppServer.model.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatroomRepository extends JpaRepository<ChatRoom, Long> {
}
