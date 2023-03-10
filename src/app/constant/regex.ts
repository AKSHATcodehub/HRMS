export const Regex = {
    username: '^[a-zA-Z0-9_@-]{2,25}$',
    password:  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}',
    email: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    // name: '^/(.|s)*S(.|s)*/$',
    name: /(.|\s)*\S(.|\s)*/,
    phone: /^[0-9]+$/,
}

