package PARKOMAT.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import PARKOMAT.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Водитель
 */
@Entity(name = "IISPARKOMATВодитель")
@Table(schema = "public", name = "Водитель")
public class Voditel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерВод")
    private Integer номервод;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Телефон")
    private Integer телефон;


    public Voditel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерВод() {
      return номервод;
    }

    public void setНомерВод(Integer номервод) {
      this.номервод = номервод;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }


}