package com.example.lastweb.controller.admin;

import com.example.lastweb.entity.admin.Faq;
import com.example.lastweb.service.admin.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FaqController {
  @Autowired
  private FaqService faqService;

  @PostMapping("/faq")
  public Faq createFaq(@RequestBody Faq faq) {
    return faqService.createFaq(faq);
  }

  @GetMapping("/faq")
  public List<Faq> listAllFaqs() {
    return faqService.listAllFaqs();
  }

  @GetMapping("/faq/{faq_id}")
  public ResponseEntity<Faq> getFaqById(@PathVariable Integer faq_id) {
    return faqService.getFaqById(faq_id);
  }

  @PutMapping("/faq/{faq_id}")
  public ResponseEntity<Faq> updateFaq(
      @PathVariable Integer faq_id, @RequestBody Faq faqDetail) {
    return faqService.updateFaq(faq_id, faqDetail);
  }

  @DeleteMapping("/faq/{faq_id}")
  public ResponseEntity<Map<String , Boolean>> deleteFaq(@PathVariable Integer faq_id) {
    return faqService.deleteFaq(faq_id);
  }

}
