from sqlalchemy import Column, Integer, String, LargeBinary, Boolean
from sqlalchemy import and_
from alchemyClasses import db


class Usuario(db.Model):

    __tablename__ = 'usuarios'
    pkey = Column("idUsuario", Integer, primary_key=True, autoincrement=True)
    nombre = Column("nombre", String(200))
    ap_paterno = Column("apPat", String(200))
    ap_materno = Column("apMat",String(200), nullable=True)
    password = Column("password", String(200))
    email = Column("email", String(200), unique=True)
    pfp = Column("profilePicture", LargeBinary(length=(2**32)-1), nullable=True)
    super_user = Column("superUser", LargeBinary(1), nullable=True, default=None)

    def __init__(self, name, f_last_name, s_last_name, pwd, email, profile_picture=None, is_super_user=None):
        self.nombre = name
        self.ap_paterno = f_last_name
        self.ap_materno = s_last_name
        self.password = pwd
        self.email = email
        self.pfp = profile_picture
        self.super_user = is_super_user

    @classmethod
    def exists_with_id(cls, user_id):
        with db.session() as session:
            usuario = Usuario.query.get(user_id)
            return bool(usuario)

    def __str__(self):
        return f"USER ID: {self.pkey}\nUsername: {self.nombre}\nApellidos: {self.ap_paterno} {self.ap_materno}\nemail: {self.email}"
