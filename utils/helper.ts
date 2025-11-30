import { SearchMentorPayload } from "@/actions/mentor/filterMentor";


const cleanUserMentorSearchPayload = (payload: Partial<SearchMentorPayload>) => {
    const cleanedPayload: Partial<SearchMentorPayload> = { ...payload };

    if (!cleanedPayload.JobTitle) {
        delete cleanedPayload.JobTitle;
    }
    if (!cleanedPayload.Specialization || cleanedPayload.Specialization.length === 0) {
        delete cleanedPayload.Specialization;
    }
    if (!cleanedPayload.Field) {
        delete cleanedPayload.Field;
    }
    if (cleanedPayload.ExperienceMin === undefined || cleanedPayload.ExperienceMin === null) {
        delete cleanedPayload.ExperienceMin;
    }
    if (!cleanedPayload.College || cleanedPayload.College.length === 0) {
        delete cleanedPayload.College;
    }

    return cleanedPayload;
};

export { cleanUserMentorSearchPayload };