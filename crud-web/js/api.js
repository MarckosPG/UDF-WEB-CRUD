class Api {

    static login (email, password) {
        let res = {};
        $.ajax({
            url: API_BASE_URL+"login.api.php",
            data: {
                "email": email,
                "password": password,
            },
            method: "POST",
            async: false,
            success: function (data) {
                res = data;
            }
        })
        return JSON.parse(res);
    }

    static logout () {
        let res = {};
        $.ajax({
            url: API_BASE_URL+"logout.api.php",
            method: "POST",
            async: false,
            success: function (data) {
                res = data;
            }
        })
        return JSON.parse(res);
    }

    static insertCourse (nome, tags) {
        let res = {};
        $.ajax({
            url: API_BASE_URL+"insertcourse.api.php",
            method: "POST",
            data:{
                "nome": nome,
                "tags": tags,
            },
            async: false,
            success: function (data) {
                res = data;
            }
        })
        return JSON.parse(res);
    }

    static getCourses() {
        let res = {};
        $.ajax({
            url: API_BASE_URL+"getcourse.api.php",
            method: "POST",
            async: false,
            success: function (data) {
                res = data;
            }
        })
        return JSON.parse(res);
    }

    static deleteCourse(id) {
        let res = {};
        $.ajax({
            url: API_BASE_URL+"deletecourse.api.php",
            method: "POST",
            async: false,
            data:{
                "id": id
            },
            success: function (data) {
                res = data;
            }
        })
        return JSON.parse(res);
    }

    static updateCourse (id, nome, tags) {
        let res = {};
        $.ajax({
            url: API_BASE_URL+"updatecourse.api.php",
            method: "POST",
            async: false,
            data:{
                "id": id,
                "nome": nome,
                "tags": tags,
            },
            success: function (data) {
                console.log(data);
                res = data;
            }
        })
        return JSON.parse(res);
    }

}