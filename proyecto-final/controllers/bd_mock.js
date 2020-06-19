let users = [];
let id = 0;
let idVideos = 0;
let videos = [];

const saveFamily = (email, password, role, namePlayer, surnamePlayer, nameTutor, surnameTutor, gender, province, birthDate, actualClub, category, positions, skills, avatarPerfil) => {
    users.push({
        id: id++,
        email,
        password,
        role,
        namePlayer,
        surnamePlayer,
        nameTutor,
        surnameTutor,
        gender,
        province,
        birthDate,
        actualClub,
        category,
        positions,
        skills,
        avatarPerfil
    })
}

const saveScout = (email, password, role, name, surname, gender, province, birthDate, actualClub, categories, positions, skills, avatarPerfil) => {
    users.push({
        id:id++,
        email,
        password,
        role,
        name,
        surname,
        gender,
        province,
        birthDate,
        actualClub,
        categories,
        positions,
        skills,
        avatarPerfil
    })
}

const getListOfUsers = () => {
    return users;
}

const getUser = (email) => {
    const matchEmail = user => user.email === email;
    return users.find(matchEmail);
}

const updateProfileFamily = (user, namePlayer, surnamePlayer, nameTutor, surnameTutor, emailTutor, gender, province, birthDate, actualClub, category, positions, skills, avatarPerfil) => {
    user.email = emailTutor;
    user.namePlayer = namePlayer;
    user.surnamePlayer = surnamePlayer;
    user.nameTutor = nameTutor;
    user.surnameTutor = surnameTutor;
    user.gender = gender;
    user.province = province;
    user.birthDate = birthDate;
    user.actualClub = actualClub;
    user.category = category;
    user.positions = positions;
    user.skills = skills;
    user.avatarPerfil = avatarPerfil;
    return;
}

const updateProfileScout = (user, name, surname, email, gender, province, birthDate, actualClub, categories, positions, skills, avatarPerfil) => {
    user.email = email;
    user.name = name;
    user.surname = surname;
    user.gender = gender;
    user.province = province;
    user.birthDate = birthDate;
    user.actualClub = actualClub;
    user.categories = categories;
    user.positions = positions;
    user.skills = skills;
    user.avatarPerfil = avatarPerfil;
    return;
}

const saveVideo = (idUsuario, titulo, descrpicion, videoFamilia) => {
    videos.push({
        id: idUsuario,
        idVideo: idVideos++,
        titulo,
        descrpicion,
        videoFamilia
    })
    return;
}

const getListOfVideos = (userId) => {
    return videos.filter(video => video.id === userId);
}

const deleteVideo = (idVideo) => {
    videos = videos.filter(video => parseInt(video.idVideo) !== idVideo);
    return;
}


module.exports = {
    deleteVideo,
    getListOfUsers,
    getListOfVideos,
    getUser,
    updateProfileFamily,
    updateProfileScout,
    saveFamily,
    saveScout,
    saveVideo
}