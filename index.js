const SteinStore = require("stein-js-client");

const store = new SteinStore(process.env.API);

store
    .append("test", [
        {
            user_name: "mouse",
            user_id: "mouse_484",
        }
    ])
    .then(() => {
        store.read("test", { search: { user_name: "mouse" } }).then(data => {
            console.log(data);
        });
    });

