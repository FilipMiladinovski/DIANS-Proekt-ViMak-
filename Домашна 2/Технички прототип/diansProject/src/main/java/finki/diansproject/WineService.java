package finki.diansproject;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WineService {
    @Autowired
    private WineRepository wineRepository;

    public List<Wine> allWines() {
        return wineRepository.findAll();
    }

    public Optional<Wine> oneWine(ObjectId id) {
        return wineRepository.findById(id);
    }
}
