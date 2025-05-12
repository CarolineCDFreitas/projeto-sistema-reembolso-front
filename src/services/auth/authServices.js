export const saveToken = (response) => {
  const acessToken = response.data.tokens.acesso;
  const refreshToken = response.data.tokens.refresh;

  localStorage.setItem("Acesso", acessToken);
  localStorage.setItem("Refresh", refreshToken);
};

export const retrieveToken = () => {
  if (typeof window === "undefined") return null;

  try {
    const token = localStorage.getItem("Acesso") || "[]";
    return token;
  } catch {
    return null;
  }
};

export const deleteToken = () => {
  localStorage.removeItem("Acesso");
  localStorage.removeItem("Refresh");
};
