package com.omdbapiProject.omdbapiProject.api;

import com.omdbapiProject.omdbapiProject.model.User;
import com.omdbapiProject.omdbapiProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/user")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //Tells spring that this method will be used as a post request
    //@RequestBody tells to convert the name in the json file into a user object
    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable("id") UUID id) {
        return userService.getUserById(id).orElse(null);
    }

    @DeleteMapping("path({id})")
    public void deleteUserById(@PathVariable("id") UUID id) {
        userService.deleteUser(id);
    }

    @PutMapping
    public void updatePerson(@PathVariable("id") UUID id ,@RequestBody User userToUpdate) {
        userService.updateUser(id,userToUpdate);
    }

}
