var setSql = {
    register: "insert into tbl_participant values(REPLACE(uuid(),'-',''),?,'?','?')",
    login: "select count(*) count from tbl_participant where participant_name = ?",
    newproject: "insert into tbl_project values(REPLACE(uuid(),'-',''),?,?)",

    projectList: "select tt.participant_name,tt.project_name,zz.participant_name,zz.project_describe from (select r.participant_name, z.uuid,x.project_name, z.participant_uuid from tbl_participant r, tbl_project_participant z, tbl_project x where x.uuid=z.project_uuid and r.uuid = z.participant_uuid) tt,(select r.participant_name, z.uuid,x.project_name, z.participant_uuid,x.project_describe from tbl_participant r,tbl_project_participant z, tbl_project x where x.uuid=z.project_uuid and r.uuid = z.participant_uuid) zz where tt.project_name=zz.project_name and tt.participant_name=?",




    addmember: "insert into tbl_project_participant values(REPLACE(uuid(),'-',''),(select uuid from tbl_project where project_name = ?),(select uuid from tbl_participant where participant_name = ?))",



    member: "select participant_name from tbl_participant where uuid in(select participant_uuid from tbl_project_participant where project_uuid = (select uuid from tbl_project where project_name = ?))",
};

module.exports = setSql;