import {useShow, useTranslate} from "@pankod/refine-core";
import {
    Show,
    Typography,
    Stack,
    NumberField,
    TextFieldComponent as TextField,
    DateField,
} from "@pankod/refine-mui";

export const OrganizationShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const t = useTranslate();

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    {t('organizations.fields.id')}
                </Typography>
                <NumberField value={record?.id ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    {t('organizations.fields.name')}
                </Typography>
                <TextField value={record?.name} />
                <Typography variant="body1" fontWeight="bold">
                    {t('organizations.fields.fullname')}
                </Typography>
                <TextField value={record?.fullname} />
                <Typography variant="body1" fontWeight="bold">
                    {t('organizations.fields.created_at')}
                </Typography>
                <DateField value={record?.created_at} />
            </Stack>
        </Show>
    );
};
