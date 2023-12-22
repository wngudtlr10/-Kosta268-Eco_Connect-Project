package com.kosta268.eco_connect.service.admin;

import com.kosta268.eco_connect.entity.admin.Qna;
import com.kosta268.eco_connect.repository.admin.QnaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class QnaService {
  @Autowired
  private QnaRepository qnaRepository;

  public Qna createQna(@RequestBody Qna qna) {
    return qnaRepository.save(qna);
  }

  public List<Qna> listAllQnas() {
    return qnaRepository.findAll();
  }
  public ResponseEntity<Qna> getQnaById(@PathVariable Integer qna_id) {
    Qna qna = qnaRepository.findById(qna_id)
        .orElseThrow(() -> new com.example.lastweb.exception.ResourceNotFoundException("Qna not exist with id : " + qna_id));

    return ResponseEntity.ok(qna);
  }

  public ResponseEntity<Qna> updateQna(@PathVariable Integer qna_id, @RequestBody Qna qnaDetails) {
    Qna qna = qnaRepository.findById(qna_id)
        .orElseThrow(() -> new com.example.lastweb.exception.ResourceNotFoundException("Qna not exist with id : " + qna_id));

    qna.setContent(qnaDetails.getContent());
    qna.setTitle(qnaDetails.getTitle());
    qna.setCategory(qnaDetails.getCategory());
    qna.setStatus(qnaDetails.getStatus());
    qna.setModify_at(qnaDetails.getModify_at());
    qna.setContent2(qnaDetails.getContent2());

    Qna updateQna = qnaRepository.save(qna);
    return ResponseEntity.ok(updateQna);
  }

  public ResponseEntity<Map<String , Boolean>> deleteQna(@PathVariable Integer qna_id) {
    Qna qna = qnaRepository.findById(qna_id)
        .orElseThrow(() -> new com.example.lastweb.exception.ResourceNotFoundException("Qna not exist with id : " + qna_id));

    qnaRepository.delete(qna);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }


}
