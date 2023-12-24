package com.kosta268.eco_connect.service.admin;



import com.kosta268.eco_connect.entity.admin.Notice;
import com.kosta268.eco_connect.repository.admin.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class NoticeService {
  @Autowired
  private NoticeRepository noticeRepository;

  public Notice createNotice(@RequestBody Notice notice) {
    return noticeRepository.save(notice);
  }

  public List<Notice> listAllNotices() {
    return noticeRepository.findAll();
  }
  public ResponseEntity<Notice> getNoticeById(@PathVariable Integer notice_id) {
    Notice notice = noticeRepository.findById(notice_id)
        .orElseThrow(() -> new com.kosta268.eco_connect.exception.ResourceNotFoundException("Notice not exist with id : " + notice_id));

    return ResponseEntity.ok(notice);
  }

  public ResponseEntity<Notice> updateNotice(@PathVariable Integer notice_id, @RequestBody Notice noticesDetails) {
    Notice notice = noticeRepository.findById(notice_id)
        .orElseThrow(() -> new com.kosta268.eco_connect.exception.ResourceNotFoundException("Notice not exist with id : " + notice_id));

    notice.setContent(noticesDetails.getContent());
    notice.setTitle(noticesDetails.getTitle());

    Notice updateNotice = noticeRepository.save(notice);
    return ResponseEntity.ok(updateNotice);
  }

  public ResponseEntity<Map<String , Boolean>> deleteNotice(@PathVariable Integer notice_id) {
    Notice notice = noticeRepository.findById(notice_id)
        .orElseThrow(() -> new com.kosta268.eco_connect.exception.ResourceNotFoundException("Notice not exist with id : " + notice_id));

    noticeRepository.delete(notice);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }


}
