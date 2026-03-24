const handleSignUp = async (email, password, username, fullName) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {  // эти данные попадут в raw_user_meta_data
        username,
        full_name: fullName,
      }
    }
  });

  if (error) {
    console.error("Ошибка регистрации:", error.message);
    return;
  }

  console.log("Пользователь зарегистрирован:", data.user);
};