package com.omdbapiProject.omdbapiProject.dao;

import com.omdbapiProject.omdbapiProject.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeDao")
public class FakeUserDataAccessService implements UserDao {

    private static List<User> DB = new ArrayList<>();

    @Override
    public int insertUser(UUID id, User user) {
        DB.add(new User(id, user.getName()));
        //Return 1 when insertion works
        return 1;
    }

    @Override
    public List<User> selectAllUsers() {
        return DB;
    }

    @Override
    public Optional<User> selectUserById(UUID id) {
        return DB.stream().filter(user -> user.getId().equals(id)).findFirst();
    }

    @Override
    public int deleteUserByID(UUID id) {
        Optional<User> userMaybe = selectUserById(id);

        if(!userMaybe.isPresent()){
            return 0;
        }
        DB.remove(userMaybe.get());
        return 1;
    }

    @Override
    public int updateUserByID(UUID id, User user) {
        return selectUserById(id).map(user1 -> {int indexOfPersonToDelete = DB.indexOf(user1);

        if (indexOfPersonToDelete >= 0) {
            DB.set(indexOfPersonToDelete,new User(id,user.getName()));
            return 1;
        }
            return 0;
        }).orElse(0);
    }
}
