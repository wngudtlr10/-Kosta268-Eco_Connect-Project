package com.kosta268.eco_connect.controller.admin;


import com.kosta268.eco_connect.entity.admin.Qna;
import com.kosta268.eco_connect.service.admin.QnaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class QnaController {
  @Autowired
  private QnaService qnaService;

  @PostMapping("/qna")
  public Qna createQna(@RequestBody Qna qna) {
    return qnaService.createQna(qna);
  }

  @GetMapping("/qna")
  public List<Qna> listAllQnas() {
    return qnaService.listAllQnas();
  }

  @GetMapping("/qna/{qna_id}")
  public ResponseEntity<Qna> getQnaById(@PathVariable Integer qna_id) {
    return qnaService.getQnaById(qna_id);
  }

  @PutMapping("/qna/{qna_id}")
  public ResponseEntity<Qna> updateQna(
      @PathVariable Integer qna_id, @RequestBody Qna qnaDetail) {
    return qnaService.updateQna(qna_id, qnaDetail);
  }

  @DeleteMapping("/qna/{qna_id}")
  public ResponseEntity<Map<String , Boolean>> deleteQna(@PathVariable Integer qna_id) {
    return qnaService.deleteQna(qna_id);
  }

}
