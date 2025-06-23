package com.url.url_shortner.controller;

import com.url.url_shortner.dto.ClickEventDTO;
import com.url.url_shortner.dto.UrlMappingDTO;
import com.url.url_shortner.model.User;
import com.url.url_shortner.service.UrlMappingService;
import com.url.url_shortner.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/urls")
@AllArgsConstructor
public class UrlMappingController {
@Autowired
    private UrlMappingService urlMappingService;
@Autowired
private UserService userService;
    @PostMapping("/short")
    @PreAuthorize("hasRole('USER')")
        public ResponseEntity<?> createShortUrl(@RequestBody Map<String,String> request, Principal principal){
        String originalUrl=request.get("originalUrl");
        System.out.println(originalUrl);
        if (originalUrl == null || originalUrl.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Original URL must not be null or empty");
        }
        User user=userService.findByUsername(principal.getName());
        UrlMappingDTO urlMappingDTO=urlMappingService.createShortUrl(originalUrl,user);
        return ResponseEntity.ok(urlMappingDTO);
    }
    @GetMapping("/myurls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?>getUserUrls(Principal principal){
        User user=userService.findByUsername(principal.getName());
        List<UrlMappingDTO>urls=urlMappingService.getUrlsByUser(user);
        return ResponseEntity.ok(urls);
    }
    @GetMapping("/analytics/{shortUrl}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<?>>getUrlAnalytics(@PathVariable String shortUrl, @RequestParam("startDAte")String startDate,
                                            @RequestParam("endDate")String endDate){

        DateTimeFormatter formatter=DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        LocalDateTime  start =LocalDateTime.parse(startDate,formatter);
        LocalDateTime end=LocalDateTime.parse(endDate,formatter);
       List<ClickEventDTO>clickEventDTOS=urlMappingService.getClickEventsByDate(shortUrl,start,end);

        return ResponseEntity.ok(clickEventDTOS);
    }
    @GetMapping("/totalClicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate, Long>> getTotalClicksByDate(Principal principal,
                                                                     @RequestParam("startDate") String startDate,
                                                                     @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;
        User user = userService.findByUsername(principal.getName());
        LocalDate start = LocalDate.parse(startDate, formatter);
        LocalDate end = LocalDate.parse(endDate, formatter);
        Map<LocalDate, Long> totalClicks = urlMappingService.getTotalClicksByUserAndDate(user, start, end);
        return ResponseEntity.ok(totalClicks);
    }

}
