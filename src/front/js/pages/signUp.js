import React, { useState } from "react";

export const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [isName, setIsName] = useState("");
    const [isLastname, setIsLastname] = useState("");
    const [isEmail, setIsEmail] = useState("");
    const [isPassword, setIsPassword] = useState("");

    return (
        <div className="container my-4" >
            <div className="row" >
                <div className="col-6 border border-danger mx-auto" >
                    <h1 className="text-center my-3">Sign up</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" value={isName} onChange={(e) => setIsName(e.target.value)} />
                            <div id="nameHelp" className="form-text">Solo un nombre.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputLastname" className="form-label">Apellido</label>
                            <input type="text" className="form-control" id="inputLastname" aria-describedby="lastnameHelp" value={isLastname} onChange={(e) => setIsLastname(e.target.value)} />
                            <div id="lastnameHelp" className="form-text">Solo un apellido.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Correo electronico</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" value={isEmail} onChange={(e) => setIsEmail(e.target.value)} />
                            <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                            {showPassword ? (
                                <input type="text" className="form-control" id="inputPassword" value={isPassword} onChange={(e) => setIsPassword(e.target.value)} />
                            ) : (
                                <input type="password" className="form-control" id="inputPassword" value={isPassword} onChange={(e) => setIsPassword(e.target.value)} />
                            )}
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="passwordCheck" onClick={() => setShowPassword(!showPassword)}/>
                                <label className="form-check-label" htmlFor="passwordCheck">Mostrar contraseña</label>
                            </div>
                        </div>
                        <div className="m-0 p-0 text-center">
                            <button type="button" className="btn fauxColor text-light my-3">Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}