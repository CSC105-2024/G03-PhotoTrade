CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_bio TEXT,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL, 
    profile_url VARCHAR(255) NOT NULL, 
    banner_url VARCHAR(255) NOT NULL, 
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE pictures (
    picture_id INT NOT NULL AUTO_INCREMENT,
    picture_title VARCHAR(255) NOT NULL,
    picture_description TEXT NOT NULL,
    picture_thumbnail_url VARCHAR(255),
    picture_price DECIMAL(10,2),
    create_at DATETIME NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (picture_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE categories (
    category_id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (category_id)
);

CREATE TABLE pic_category (
    picture_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (picture_id, category_id),
    FOREIGN KEY (picture_id) REFERENCES pictures(picture_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE user_like (
    user_id INT NOT NULL,
    picture_id INT NOT NULL,
    PRIMARY KEY (user_id, picture_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (picture_id) REFERENCES pictures(picture_id)
);

CREATE TABLE trade  (
    user_id INT NOT NULL,
    picture_id INT NOT NULL,
    trade_at DATETIME NOT NULL,
    PRIMARY KEY (user_id, picture_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (picture_id) REFERENCES pictures(picture_id)
)





