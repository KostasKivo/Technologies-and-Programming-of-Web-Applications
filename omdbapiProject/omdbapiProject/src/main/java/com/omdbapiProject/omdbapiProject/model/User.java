package com.omdbapiProject.omdbapiProject.model;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User {

    private final UUID id;
    private final String name;

    /*
    post requests will be with json like { "name": "James Bond" }
    name in the constructor says that its the name of the json file
     */
    public User(@JsonProperty("id") UUID id,
                @JsonProperty("name") String name){
        this.id=id;
        this.name=name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
