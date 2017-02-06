package myapp.repository;

import myapp.domain.Magazine;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Magazine entity.
 */
@SuppressWarnings("unused")
public interface MagazineRepository extends JpaRepository<Magazine,Long> {

}
