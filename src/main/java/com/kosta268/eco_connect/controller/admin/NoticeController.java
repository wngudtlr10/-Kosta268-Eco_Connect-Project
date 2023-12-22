package com.kosta268.eco_connect.controller.admin;


import com.kosta268.eco_connect.entity.admin.Notice;
import com.kosta268.eco_connect.service.admin.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class NoticeController {
  @Autowired
  private NoticeService noticeService;

  @PostMapping("/notice")
  public Notice createNotice(@RequestBody Notice notice) {
    return noticeService.createNotice(notice);
  }

  @GetMapping("/notice")
  public List<Notice> listAllNotices() {
    return noticeService.listAllNotices();
  }

  @GetMapping("/notice/{notice_id}")
  public ResponseEntity<Notice> getNoticeById(@PathVariable Integer notice_id) {
    return noticeService.getNoticeById(notice_id);
  }

  @PutMapping("/notice/{notice_id}")
  public ResponseEntity<Notice> updateNotice(
      @PathVariable Integer notice_id, @RequestBody Notice noticeDetail) {
    return noticeService.updateNotice(notice_id, noticeDetail);
  }

  @DeleteMapping("/notice/{notice_id}")
  public ResponseEntity<Map<String , Boolean>> deleteNotice(@PathVariable Integer notice_id) {
    return noticeService.deleteNotice(notice_id);
  }

}
