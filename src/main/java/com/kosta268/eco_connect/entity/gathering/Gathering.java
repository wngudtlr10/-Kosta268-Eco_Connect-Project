package com.kosta268.eco_connect.entity.gathering;

import com.kosta268.eco_connect.entity.Address;
import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.member.Member;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Gathering {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gatheringId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id")
    private Member creator;

    @Column(length = 50, nullable = false)
    private String title;

    @Column
    private String intro;

    @Column
    private String etc;


    @Embedded
    private Address location;

    @Column
    private String image;

    @Builder.Default
    @Column(columnDefinition = "VARCHAR(10) default 'OPEN'")
    @Enumerated(EnumType.STRING)
    private Status status = Status.OPEN;

    @Builder.Default
    @Column(columnDefinition = "INT default 1")
    private int count = 1;

    private int capacity;


    @Column
    private LocalDateTime createAt;

    private LocalDateTime deadline;
    private LocalDateTime startAt;

    @Enumerated(EnumType.STRING)
    private Category category;

    private String chatRoomId;

    @Builder.Default
    @OneToMany(mappedBy = "gathering", cascade = CascadeType.REMOVE)
    private List<MemberGathering> memberGatherings = new ArrayList<>();

    @PrePersist
    public void prePersist() {
        this.createAt = LocalDateTime.now();
    }

}
