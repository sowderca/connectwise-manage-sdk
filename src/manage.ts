'use strict';

import { URL } from 'url';
import { ManageCompanyInfo } from './lib/info';
import fetch from 'isomorphic-fetch';
import {
    AccountingPackagesApi,
    AddressFormatsApi,
    AgreementBatchSetupsApi,
    AgreementTypeBoardDefaultsApi,
    AgreementTypeWorkRoleExclusionsApi,
    AgreementTypeWorkRolesApi,
    AgreementTypeWorkTypeExclusionsApi,
    AgreementTypeWorkTypesApi,
    AuthAnvilsApi,
    BillingCyclesApi,
    BillingSetupRoutingsApi,
    BillingSetupsApi,
    BillingStatusesApi,
    BillingTermsApi,
    BoardAutoAssignResourcesApi,
    BoardAutoTemplatesApi,
    BoardItemAssociationsApi,
    BoardNotificationsApi,
    BoardStatusNotificationsApi,
    BoardTypeSubTypeItemAssociationsApi,
    CalendarsApi,
    ChargeCodeExpenseTypesApi,
    ChargeCodesApi,
    ClassificationsApi,
    CommissionsApi,
    CompanyGroupsApi,
    CompanyPickerItemsApi,
    ConfigurationTypeQuestionValuesApi,
    ContactGroupsApi,
    CorporateStructureLevelsApi,
    CorporateStructuresApi,
    CountriesApi,
    CrmsApi,
    CustomReportParametersApi,
    CustomReportsApi,
    DeliveryMethodsApi,
    DepartmentLocationsApi,
    DepartmentsApi,
    DocumentsSetupApi,
    EmailConnectorParsingRulesApi,
    EmailConnectorParsingStylesApi,
    EmailConnectorsApi,
    EmailTokensApi,
    ExpenseReportsApi,
    ExpenseTypeExternalIntegrationReferencesApi,
    HolidayListsApi,
    HolidaysApi,
    ImapsApi,
    ImpactsApi,
    ImportsMassMaintenanceApi,
    IntegratorLoginsApi,
    InvoiceEmailTemplatesApi,
    InvoiceTemplatesApi,
    InvoiceTemplateSetupsApi,
    KPICategoriesApi,
    KPIsApi,
    LdapConfigurationsApi,
    LegacyCampaignSubTypesApi,
    LegacySubCategoriesApi,
    LocationDepartmentsApi,
    LocationWorkRolesApi,
    ManagedDevicesIntegrationCrossReferencesApi,
    ManagedDevicesIntegrationLoginsApi,
    ManagedDevicesIntegrationNotificationsApi,
    ManagedDevicesIntegrationsApi,
    ManagementExecuteManagedItSyncsApi,
    ManagementItSolutionAgreementInterfaceParametersApi,
    ManagementItSolutionsApi,
    ManagementLogsApi,
    ManagementNetworksSecurityApi,
    ManagementReportNotificationsApi,
    ManagementsApi,
    MemberAccrualsApi,
    MemberCertificationsApi,
    MemberDelegationsApi,
    MemberSkillsApi,
    MenuEntryLocationsApi,
    NotificationRecipientsApi,
    OrderStatusesEmailTemplateApi,
    OrderStatusNotificationsApi,
    OthersApi,
    ParsingTypesApi,
    ParsingVariablesApi,
    PaymentTypesApi,
    PortalCalendarsApi,
    PortalConfigurationInvoiceSetupsApi,
    PortalConfigurationOpportunitySetupsApi,
    PortalConfigurationPasswordEmailSetupsApi,
    PortalConfigurationProjectSetupsApi,
    PortalConfigurationsApi,
    PortalConfigurationServiceSetupsApi,
    PortalReportsApi,
    PortalSecuritySettingsApi,
    PortalSecurityLevelsApi,
    ProjectSecurityRolesApi,
    ProjectSecurityRoleSettingsApi,
    ProjectStatusesApi,
    ProjectTypesApi,
    PurchaseOrderStatusEmailTemplatesApi,
    PurchaseOrderStatusesApi,
    PurchaseOrderStatusNotificationsApi,
    ReportCardDetailsApi,
    ReportCardsApi,
    ReportingServicesApi,
    RmaStatusEmailTemplatesApi,
    RmaStatusesApi,
    RmaStatusNotificationsApi,
    SalesQuotasApi,
    SalesTeamMembersApi,
    SalesTeamsApi,
    ScheduleColorsApi,
    ScheduleDetailsApi,
    SecurityRolesApi,
    SecurityRoleSettingsApi,
    ServiceEmailTemplatesApi,
    ServiceLocationsApi,
    ServicesApi,
    ServiceSignoffsApi,
    ServiceSurveyQuestionsApi,
    ServiceSurveysApi,
    ServiceTeamsApi,
    ServiceTemplatesApi,
    SetupScreensApi,
    SeveritiesApi,
    SLAPrioritiesApi,
    SLAsApi,
    StatesApi,
    StatusExternalIntegrationReferencesApi,
    SurveyOptionsApi,
    SurveyQuestionValuesApi,
    TracksApi,
    TaxCodeExpenseTypeExemptionsApi,
    TaxCodeProductTypeExemptionsApi,
    TaxCodeWorkRoleExemptionsApi,
    TaxIntegrationsApi,
    TeamMembersApi,
    TicketSyncsApi,
    TimeAccrualDetailsApi,
    TimeAccrualsApi,
    TimeExpensesApi,
    TimePeriodsApi,
    TimePeriodSetupsApi,
    TimeSheetsApi,
    TimeZonesApi,
    TimeZoneSetupsApi,
    TrackActionsApi,
    WarehouseBinsApi,
    WarehousesApi,
    WorkflowActionAutomateParametersApi,
    WorkflowActionsApi,
    WorkflowEventsApi,
    WorkflowNotifyTypesApi,
    WorkflowsApi,
    WorkflowTableTypesApi,
    WorkflowTriggerOptionsApi,
    WorkflowTriggersApi,
    WorkRoleLocationsApi,
    WorkRolesApi,
    WorkTypeExternalIntegrationReferencesApi,
    WorkTypesApi,
    AccountingBatchesApi,
    AccountingUnpostedExpensesApi,
    AccountingUnpostedProcurementsApi,
    AccountingUnpostedinvoicesApi,
    ActivitiesApi,
    ActivityStatusesApi,
    ActivityStopwatchesApi,
    ActivityTypesApi,
    AdjustmentDetailsApi,
    AdjustmentTypesApi,
    AdjustmentsApi,
    AgreementSitesApi,
    AgreementAdditionsApi,
    AgreementAdjustmentsApi,
    AgreementBoardDefaultsApi,
    AgreementTypesApi,
    AgreementWorkRoleExclusionsApi,
    AgreementWorkRolesApi,
    AgreementWorkTypeExclusionsApi,
    AgreementWorkTypesApi,
    AgreementsApi,
    AuditTrailApi,
    BatchApi,
    BoardExcludedMembersApi,
    BoardItemsApi,
    BoardStatusesApi,
    BoardSubTypesApi,
    BoardTeamsApi,
    BoardTypesApi,
    BoardsApi,
    CallbacksApi,
    CampaignAuditsApi,
    CampaignEmailsOpenedApi,
    CampaignFormsSubmittedApi,
    CampaignLinksClickedApi,
    CampaignStatusesApi,
    CampaignSubTypesApi,
    CampaignTypesApi,
    CampaignsApi,
    CatalogComponentsApi,
    CatalogsItemApi,
    CategoriesApi,
    CertificationsApi,
    CodesApi,
    CompaniesApi,
    CompanyCustomNotesApi,
    CompanyManagementSummaryReportsApi,
    CompanyNotesApi,
    CompanyNoteTypesApi,
    CompanySitesApi,
    CompanyStatusesApi,
    CompanyTeamsApi,
    CompanyTypesApi,
    ConfigurationStatusesApi,
    ConfigurationTypeQuestionsApi,
    ConfigurationTypesApi,
    ContactsApi,
    CurrenciesApi,
    ConfigurationsApi,
    ContactNotesApi,
    ContactTypesApi,
    ContactTracksApi,
    ContactDepartmentsApi,
    ContactRelationshipsApi,
    ContactCommunicationsApi,
    ConnectWiseHostedSetupsApi,
    DocumentsApi,
    ExpenseEntriesApi,
    ExpenseTypesApi,
    GroupCompaniesApi,
    GroupsApi,
    GroupContactsApi,
    InfoApi,
    InOutBoardsApi,
    InOutTypesApi,
    InvoicesApi,
    InvoicePaymentsApi,
    KnowledgeBaseArticlesApi,
    LinksApi,
    LocationsApi,
    ManagementBackupsApi,
    MarketDescriptionsApi,
    ManufacturersApi,
    MembersApi,
    MemberTypesApi,
    MenuEntriesApi,
    OpportunitiesApi,
    OrdersApi,
    OrderStatusesApi,
    OpportunityNotesApi,
    OpportunityTeamsApi,
    OpportunityTypesApi,
    OpportunityRatingsApi,
    OpportunityContactsApi,
    OpportunityStatusesApi,
    OpportunityStagesApi,
    OpportunityForecastsApi,
    OwnershipTypesApi,
    PricingBreaksApi,
    ProjectsApi,
    PrioritiesApi,
    ProductsItemApi,
    ProductTypesApi,
    ProjectNotesApi,
    ProjectPhasesApi,
    PricingDetailsApi,
    PurchaseOrdersApi,
    ProjectContactsApi,
    PricingSchedulesApi,
    ProductComponentsApi,
    ProjectsTeamMembersApi,
    PurchaseOrderLineItemsApi,
    ProductPickingShippingDetailsApi,
    ReportsApi,
    RmaActionsApi,
    RmaDispositionsApi,
    RolesApi,
    SalesProbabilitiesApi,
    SourcesApi,
    SurveysApi,
    ScheduleTypesApi,
    SubCategoriesApi,
    SurveyResultsApi,
    ScheduleEntriesApi,
    ShipmentMethodsApi,
    SurveyQuestionsApi,
    ScheduleStatusesApi,
    ScheduleStopwatchesApi,
    ScheduleReminderTimesApi,
    TaxCodeXRefsApi,
    TicketsApi,
    TaxCodesApi,
    TicketNotesApi,
    TicketTasksApi,
    TimeEntriesApi,
    TeamRolesApi,
    SkillsApi,
    SkillCategoriesApi,
    TodayPageCategoriesApi,
    TicketStopwatchesApi,
    UnitOfMeasureConversionsApi,
    UnitOfMeasuresApi,
    UserDefinedFieldsApi,
    //
    ClosedInvoicesApi,
    EntityTypesApi,
    EPayConfigurationsApi,
    LabsApi,
    MyMemberCertificationsApi,
    MyMembersApi,
    MySecuritysApi,
    PortalConfigurationPaymentProcessorsApi,
    ProcurementSettingsApi,
    WorkflowAttachmentsApi,
} from './api/api';

export class ApiClient {
    public readonly AccountingPackagesApi: AccountingPackagesApi;
    public readonly AddressFormatsApi: AddressFormatsApi;
    public readonly AgreementBatchSetupsApi: AgreementBatchSetupsApi;
    public readonly AgreementTypeBoardDefaultsApi: AgreementTypeBoardDefaultsApi;
    public readonly AgreementTypeWorkRoleExclusionsApi: AgreementTypeWorkRoleExclusionsApi;
    public readonly AgreementTypeWorkRolesApi: AgreementTypeWorkRolesApi;
    public readonly AgreementTypeWorkTypeExclusionsApi: AgreementTypeWorkTypeExclusionsApi;
    public readonly AgreementTypeWorkTypesApi: AgreementTypeWorkTypesApi;
    public readonly AuthAnvilsApi: AuthAnvilsApi;
    public readonly BillingCyclesApi: BillingCyclesApi;
    public readonly BillingSetupRoutingsApi: BillingSetupRoutingsApi;
    public readonly BillingSetupsApi: BillingSetupsApi;
    public readonly BillingStatusesApi: BillingStatusesApi;
    public readonly BillingTermsApi: BillingTermsApi;
    public readonly BoardAutoAssignResourcesApi: BoardAutoAssignResourcesApi;
    public readonly BoardAutoTemplatesApi: BoardAutoTemplatesApi;
    public readonly BoardItemAssociationsApi: BoardItemAssociationsApi;
    public readonly BoardNotificationsApi: BoardNotificationsApi;
    public readonly BoardStatusNotificationsApi: BoardStatusNotificationsApi;
    public readonly BoardTypeSubTypeItemAssociationsApi: BoardTypeSubTypeItemAssociationsApi;
    public readonly CalendarsApi: CalendarsApi;
    public readonly ChargeCodeExpenseTypesApi: ChargeCodeExpenseTypesApi;
    public readonly ChargeCodesApi: ChargeCodesApi;
    public readonly ClassificationsApi: ClassificationsApi;
    public readonly CommissionsApi: CommissionsApi;
    public readonly CompanyGroupsApi: CompanyGroupsApi;
    public readonly CompanyPickerItemsApi: CompanyPickerItemsApi;
    public readonly ConfigurationTypeQuestionValuesApi: ConfigurationTypeQuestionValuesApi;
    public readonly ContactGroupsApi: ContactGroupsApi;
    public readonly CorporateStructureLevelsApi: CorporateStructureLevelsApi;
    public readonly CorporateStructuresApi: CorporateStructuresApi;
    public readonly CountriesApi: CountriesApi;
    public readonly CrmsApi: CrmsApi;
    public readonly CustomReportParametersApi: CustomReportParametersApi;
    public readonly CustomReportsApi: CustomReportsApi;
    public readonly DeliveryMethodsApi: DeliveryMethodsApi;
    public readonly DepartmentLocationsApi: DepartmentLocationsApi;
    public readonly DepartmentsApi: DepartmentsApi;
    public readonly DocumentsSetupApi: DocumentsSetupApi;
    public readonly EmailConnectorParsingRulesApi: EmailConnectorParsingRulesApi;
    public readonly EmailConnectorParsingStylesApi: EmailConnectorParsingStylesApi;
    public readonly EmailConnectorsApi: EmailConnectorsApi;
    public readonly EmailTokensApi: EmailTokensApi;
    public readonly ExpenseReportsApi: ExpenseReportsApi;
    public readonly ExpenseTypeExternalIntegrationReferencesApi: ExpenseTypeExternalIntegrationReferencesApi;
    public readonly HolidayListsApi: HolidayListsApi;
    public readonly HolidaysApi: HolidaysApi;
    public readonly ImapsApi: ImapsApi;
    public readonly ImpactsApi: ImpactsApi;
    public readonly ImportsMassMaintenanceApi: ImportsMassMaintenanceApi;
    public readonly IntegratorLoginsApi: IntegratorLoginsApi;
    public readonly InvoiceEmailTemplatesApi: InvoiceEmailTemplatesApi;
    public readonly InvoiceTemplatesApi: InvoiceTemplatesApi;
    public readonly InvoiceTemplateSetupsApi: InvoiceTemplateSetupsApi;
    public readonly KPICategoriesApi: KPICategoriesApi;
    public readonly KPIsApi: KPIsApi;
    public readonly LdapConfigurationsApi: LdapConfigurationsApi;
    public readonly LegacyCampaignSubTypesApi: LegacyCampaignSubTypesApi;
    public readonly LegacySubCategoriesApi: LegacySubCategoriesApi;
    public readonly LocationDepartmentsApi: LocationDepartmentsApi;
    public readonly LocationWorkRolesApi: LocationWorkRolesApi;
    public readonly ManagedDevicesIntegrationCrossReferencesApi: ManagedDevicesIntegrationCrossReferencesApi;
    public readonly ManagedDevicesIntegrationLoginsApi: ManagedDevicesIntegrationLoginsApi;
    public readonly ManagedDevicesIntegrationNotificationsApi: ManagedDevicesIntegrationNotificationsApi;
    public readonly ManagedDevicesIntegrationsApi: ManagedDevicesIntegrationsApi;
    public readonly ManagementExecuteManagedItSyncsApi: ManagementExecuteManagedItSyncsApi;
    public readonly ManagementItSolutionAgreementInterfaceParametersApi: ManagementItSolutionAgreementInterfaceParametersApi;
    public readonly ManagementItSolutionsApi: ManagementItSolutionsApi;
    public readonly ManagementLogsApi: ManagementLogsApi;
    public readonly ManagementNetworksSecurityApi: ManagementNetworksSecurityApi;
    public readonly ManagementReportNotificationsApi: ManagementReportNotificationsApi;
    public readonly ManagementsApi: ManagementsApi;
    public readonly MemberAccrualsApi: MemberAccrualsApi;
    public readonly MemberCertificationsApi: MemberCertificationsApi;
    public readonly MemberDelegationsApi: MemberDelegationsApi;
    public readonly MemberSkillsApi: MemberSkillsApi;
    public readonly MenuEntryLocationsApi: MenuEntryLocationsApi;
    public readonly NotificationRecipientsApi: NotificationRecipientsApi;
    public readonly OrderStatusesEmailTemplateApi: OrderStatusesEmailTemplateApi;
    public readonly OrderStatusNotificationsApi: OrderStatusNotificationsApi;
    public readonly OthersApi: OthersApi;
    public readonly ParsingTypesApi: ParsingTypesApi;
    public readonly ParsingVariablesApi: ParsingVariablesApi;
    public readonly PaymentTypesApi: PaymentTypesApi;
    public readonly PortalCalendarsApi: PortalCalendarsApi;
    public readonly PortalConfigurationInvoiceSetupsApi: PortalConfigurationInvoiceSetupsApi;
    public readonly PortalConfigurationOpportunitySetupsApi: PortalConfigurationOpportunitySetupsApi;
    public readonly PortalConfigurationPasswordEmailSetupsApi: PortalConfigurationPasswordEmailSetupsApi;
    public readonly PortalConfigurationProjectSetupsApi: PortalConfigurationProjectSetupsApi;
    public readonly PortalConfigurationsApi: PortalConfigurationsApi;
    public readonly PortalConfigurationServiceSetupsApi: PortalConfigurationServiceSetupsApi;
    public readonly PortalReportsApi: PortalReportsApi;
    public readonly PortalSecuritySettingsApi: PortalSecuritySettingsApi;
    public readonly PortalSecurityLevelsApi: PortalSecurityLevelsApi;
    public readonly ProjectSecurityRolesApi: ProjectSecurityRolesApi;
    public readonly ProjectSecurityRoleSettingsApi: ProjectSecurityRoleSettingsApi;
    public readonly ProjectStatusesApi: ProjectStatusesApi;
    public readonly ProjectTypesApi: ProjectTypesApi;
    public readonly PurchaseOrderStatusEmailTemplatesApi: PurchaseOrderStatusEmailTemplatesApi;
    public readonly PurchaseOrderStatusesApi: PurchaseOrderStatusesApi;
    public readonly PurchaseOrderStatusNotificationsApi: PurchaseOrderStatusNotificationsApi;
    public readonly ReportCardDetailsApi: ReportCardDetailsApi;
    public readonly ReportCardsApi: ReportCardsApi;
    public readonly ReportingServicesApi: ReportingServicesApi;
    public readonly RmaStatusEmailTemplatesApi: RmaStatusEmailTemplatesApi;
    public readonly RmaStatusesApi: RmaStatusesApi;
    public readonly RmaStatusNotificationsApi: RmaStatusNotificationsApi;
    public readonly SalesQuotasApi: SalesQuotasApi;
    public readonly SalesTeamMembersApi: SalesTeamMembersApi;
    public readonly SalesTeamsApi: SalesTeamsApi;
    public readonly ScheduleColorsApi: ScheduleColorsApi;
    public readonly ScheduleDetailsApi: ScheduleDetailsApi;
    public readonly SecurityRolesApi: SecurityRolesApi;
    public readonly SecurityRoleSettingsApi: SecurityRoleSettingsApi;
    public readonly ServiceEmailTemplatesApi: ServiceEmailTemplatesApi;
    public readonly ServiceLocationsApi: ServiceLocationsApi;
    public readonly ServicesApi: ServicesApi;
    public readonly ServiceSignoffsApi: ServiceSignoffsApi;
    public readonly ServiceSurveyQuestionsApi: ServiceSurveyQuestionsApi;
    public readonly ServiceSurveysApi: ServiceSurveysApi;
    public readonly ServiceTeamsApi: ServiceTeamsApi;
    public readonly ServiceTemplatesApi: ServiceTemplatesApi;
    public readonly SetupScreensApi: SetupScreensApi;
    public readonly SeveritiesApi: SeveritiesApi;
    public readonly SLAPrioritiesApi: SLAPrioritiesApi;
    public readonly SLAsApi: SLAsApi;
    public readonly StatesApi: StatesApi;
    public readonly StatusExternalIntegrationReferencesApi: StatusExternalIntegrationReferencesApi;
    public readonly SurveyOptionsApi: SurveyOptionsApi;
    public readonly SurveyQuestionValuesApi: SurveyQuestionValuesApi;
    public readonly TracksApi: TracksApi;
    public readonly TaxCodeExpenseTypeExemptionsApi: TaxCodeExpenseTypeExemptionsApi;
    public readonly TaxCodeProductTypeExemptionsApi: TaxCodeProductTypeExemptionsApi;
    public readonly TaxCodeWorkRoleExemptionsApi: TaxCodeWorkRoleExemptionsApi;
    public readonly TaxIntegrationsApi: TaxIntegrationsApi;
    public readonly TeamMembersApi: TeamMembersApi;
    public readonly TicketSyncsApi: TicketSyncsApi;
    public readonly TimeAccrualDetailsApi: TimeAccrualDetailsApi;
    public readonly TimeAccrualsApi: TimeAccrualsApi;
    public readonly TimeExpensesApi: TimeExpensesApi;
    public readonly TimePeriodsApi: TimePeriodsApi;
    public readonly TimePeriodSetupsApi: TimePeriodSetupsApi;
    public readonly TimeSheetsApi: TimeSheetsApi;
    public readonly TimeZonesApi: TimeZonesApi;
    public readonly TimeZoneSetupsApi: TimeZoneSetupsApi;
    public readonly TrackActionsApi: TrackActionsApi;
    public readonly WarehouseBinsApi: WarehouseBinsApi;
    public readonly WarehousesApi: WarehousesApi;
    public readonly WorkflowActionAutomateParametersApi: WorkflowActionAutomateParametersApi;
    public readonly WorkflowActionsApi: WorkflowActionsApi;
    public readonly WorkflowEventsApi: WorkflowEventsApi;
    public readonly WorkflowNotifyTypesApi: WorkflowNotifyTypesApi;
    public readonly WorkflowsApi: WorkflowsApi;
    public readonly WorkflowTableTypesApi: WorkflowTableTypesApi;
    public readonly WorkflowTriggerOptionsApi: WorkflowTriggerOptionsApi;
    public readonly WorkflowTriggersApi: WorkflowTriggersApi;
    public readonly WorkRoleLocationsApi: WorkRoleLocationsApi;
    public readonly WorkRolesApi: WorkRolesApi;
    public readonly WorkTypeExternalIntegrationReferencesApi: WorkTypeExternalIntegrationReferencesApi;
    public readonly WorkTypesApi: WorkTypesApi;
    public readonly AccountingBatchesApi: AccountingBatchesApi;
    public readonly AccountingUnpostedExpensesApi: AccountingUnpostedExpensesApi;
    public readonly AccountingUnpostedProcurementsApi: AccountingUnpostedProcurementsApi;
    public readonly AccountingUnpostedinvoicesApi: AccountingUnpostedinvoicesApi;
    public readonly ActivitiesApi: ActivitiesApi;
    public readonly ActivityStatusesApi: ActivityStatusesApi;
    public readonly ActivityStopwatchesApi: ActivityStopwatchesApi;
    public readonly ActivityTypesApi: ActivityTypesApi;
    public readonly AdjustmentDetailsApi: AdjustmentDetailsApi;
    public readonly AdjustmentTypesApi: AdjustmentTypesApi;
    public readonly AdjustmentsApi: AdjustmentsApi;
    public readonly AgreementSitesApi: AgreementSitesApi;
    public readonly AgreementAdditionsApi: AgreementAdditionsApi;
    public readonly AgreementAdjustmentsApi: AgreementAdjustmentsApi;
    public readonly AgreementBoardDefaultsApi: AgreementBoardDefaultsApi;
    public readonly AgreementTypesApi: AgreementTypesApi;
    public readonly AgreementWorkRoleExclusionsApi: AgreementWorkRoleExclusionsApi;
    public readonly AgreementWorkRolesApi: AgreementWorkRolesApi;
    public readonly AgreementWorkTypeExclusionsApi: AgreementWorkTypeExclusionsApi;
    public readonly AgreementWorkTypesApi: AgreementWorkTypesApi;
    public readonly AgreementsApi: AgreementsApi;
    public readonly AuditTrailApi: AuditTrailApi;
    public readonly BatchApi: BatchApi;
    public readonly BoardExcludedMembersApi: BoardExcludedMembersApi;
    public readonly BoardItemsApi: BoardItemsApi;
    public readonly BoardStatusesApi: BoardStatusesApi;
    public readonly BoardSubTypesApi: BoardSubTypesApi;
    public readonly BoardTeamsApi: BoardTeamsApi;
    public readonly BoardTypesApi: BoardTypesApi;
    public readonly BoardsApi: BoardsApi;
    public readonly CallbacksApi: CallbacksApi;
    public readonly CampaignAuditsApi: CampaignAuditsApi;
    public readonly CampaignEmailsOpenedApi: CampaignEmailsOpenedApi;
    public readonly CampaignFormsSubmittedApi: CampaignFormsSubmittedApi;
    public readonly CampaignLinksClickedApi: CampaignLinksClickedApi;
    public readonly CampaignStatusesApi: CampaignStatusesApi;
    public readonly CampaignSubTypesApi: CampaignSubTypesApi;
    public readonly CampaignTypesApi: CampaignTypesApi;
    public readonly CampaignsApi: CampaignsApi;
    public readonly CatalogComponentsApi: CatalogComponentsApi;
    public readonly CatalogsItemApi: CatalogsItemApi;
    public readonly CategoriesApi: CategoriesApi;
    public readonly CertificationsApi: CertificationsApi;
    public readonly CodesApi: CodesApi;
    public readonly CompaniesApi: CompaniesApi;
    public readonly CompanyCustomNotesApi: CompanyCustomNotesApi;
    public readonly CompanyManagementSummaryReportsApi: CompanyManagementSummaryReportsApi;
    public readonly CompanyNotesApi: CompanyNotesApi;
    public readonly CompanyNoteTypesApi: CompanyNoteTypesApi;
    public readonly CompanySitesApi: CompanySitesApi;
    public readonly CompanyStatusesApi: CompanyStatusesApi;
    public readonly CompanyTeamsApi: CompanyTeamsApi;
    public readonly CompanyTypesApi: CompanyTypesApi;
    public readonly ConfigurationStatusesApi: ConfigurationStatusesApi;
    public readonly ConfigurationTypeQuestionsApi: ConfigurationTypeQuestionsApi;
    public readonly ConfigurationTypesApi: ConfigurationTypesApi;
    public readonly ContactsApi: ContactsApi;
    public readonly CurrenciesApi: CurrenciesApi;
    public readonly ConfigurationsApi: ConfigurationsApi;
    public readonly ContactNotesApi: ContactNotesApi;
    public readonly ContactTypesApi: ContactTypesApi;
    public readonly ContactTracksApi: ContactTracksApi;
    public readonly ContactDepartmentsApi: ContactDepartmentsApi;
    public readonly ContactRelationshipsApi: ContactRelationshipsApi;
    public readonly ContactCommunicationsApi: ContactCommunicationsApi;
    public readonly ConnectWiseHostedSetupsApi: ConnectWiseHostedSetupsApi;
    public readonly DocumentsApi: DocumentsApi;
    public readonly ExpenseEntriesApi: ExpenseEntriesApi;
    public readonly ExpenseTypesApi: ExpenseTypesApi;
    public readonly GroupCompaniesApi: GroupCompaniesApi;
    public readonly GroupsApi: GroupsApi;
    public readonly GroupContactsApi: GroupContactsApi;
    public readonly InfoApi: InfoApi;
    public readonly InOutBoardsApi: InOutBoardsApi;
    public readonly InOutTypesApi: InOutTypesApi;
    public readonly InvoicesApi: InvoicesApi;
    public readonly InvoicePaymentsApi: InvoicePaymentsApi;
    public readonly KnowledgeBaseArticlesApi: KnowledgeBaseArticlesApi;
    public readonly LinksApi: LinksApi;
    public readonly LocationsApi: LocationsApi;
    public readonly MembersApi: MembersApi;
    public readonly MemberTypesApi: MemberTypesApi;
    public readonly ManagementBackupsApi: ManagementBackupsApi;
    public readonly MarketDescriptionsApi: MarketDescriptionsApi;
    public readonly ManufacturersApi: ManufacturersApi;
    public readonly MenuEntriesApi: MenuEntriesApi;
    public readonly OpportunitiesApi: OpportunitiesApi;
    public readonly OrdersApi: OrdersApi;
    public readonly OrderStatusesApi: OrderStatusesApi;
    public readonly OpportunityNotesApi: OpportunityNotesApi;
    public readonly OpportunityTeamsApi: OpportunityTeamsApi;
    public readonly OpportunityTypesApi: OpportunityTypesApi;
    public readonly OpportunityRatingsApi: OpportunityRatingsApi;
    public readonly OpportunityContactsApi: OpportunityContactsApi;
    public readonly OpportunityStatusesApi: OpportunityStatusesApi;
    public readonly OpportunityStagesApi: OpportunityStagesApi;
    public readonly OpportunityForecastsApi: OpportunityForecastsApi;
    public readonly OwnershipTypesApi: OwnershipTypesApi;
    public readonly PricingBreaksApi: PricingBreaksApi;
    public readonly ProjectsApi: ProjectsApi;
    public readonly PrioritiesApi: PrioritiesApi;
    public readonly ProductsItemApi: ProductsItemApi;
    public readonly ProductTypesApi: ProductTypesApi;
    public readonly ProjectNotesApi: ProjectNotesApi;
    public readonly ProjectPhasesApi: ProjectPhasesApi;
    public readonly PricingDetailsApi: PricingDetailsApi;
    public readonly PurchaseOrdersApi: PurchaseOrdersApi;
    public readonly ProjectContactsApi: ProjectContactsApi;
    public readonly PricingSchedulesApi: PricingSchedulesApi;
    public readonly ProductComponentsApi: ProductComponentsApi;
    public readonly ProjectsTeamMembersApi: ProjectsTeamMembersApi;
    public readonly PurchaseOrderLineItemsApi: PurchaseOrderLineItemsApi;
    public readonly ProductPickingShippingDetailsApi: ProductPickingShippingDetailsApi;
    public readonly ReportsApi: ReportsApi;
    public readonly RmaActionsApi: RmaActionsApi;
    public readonly RmaDispositionsApi: RmaDispositionsApi;
    public readonly RolesApi: RolesApi;
    public readonly SalesProbabilitiesApi: SalesProbabilitiesApi;
    public readonly SkillsApi: SkillsApi;
    public readonly SkillCategoriesApi: SkillCategoriesApi;
    public readonly SourcesApi: SourcesApi;
    public readonly SurveysApi: SurveysApi;
    public readonly ScheduleTypesApi: ScheduleTypesApi;
    public readonly SubCategoriesApi: SubCategoriesApi;
    public readonly SurveyResultsApi: SurveyResultsApi;
    public readonly ScheduleEntriesApi: ScheduleEntriesApi;
    public readonly ShipmentMethodsApi: ShipmentMethodsApi;
    public readonly SurveyQuestionsApi: SurveyQuestionsApi;
    public readonly ScheduleStatusesApi: ScheduleStatusesApi;
    public readonly ScheduleStopwatchesApi: ScheduleStopwatchesApi;
    public readonly ScheduleReminderTimesApi: ScheduleReminderTimesApi;
    public readonly TaxCodeXRefsApi: TaxCodeXRefsApi;
    public readonly TeamRolesApi: TeamRolesApi;
    public readonly TicketsApi: TicketsApi;
    public readonly TaxCodesApi: TaxCodesApi;
    public readonly TicketNotesApi: TicketNotesApi;
    public readonly TicketTasksApi: TicketTasksApi;
    public readonly TimeEntriesApi: TimeEntriesApi;
    public readonly TicketStopwatchesApi: TicketStopwatchesApi;
    public readonly TodayPageCategoriesApi: TodayPageCategoriesApi;
    public readonly UnitOfMeasureConversionsApi: UnitOfMeasureConversionsApi;
    public readonly UnitOfMeasuresApi: UnitOfMeasuresApi;
    public readonly UserDefinedFieldsApi: UserDefinedFieldsApi;
    public readonly ClosedInvoicesApi: ClosedInvoicesApi;
    public readonly EntityTypesApi: EntityTypesApi;
    public readonly EPayConfigurationsApi: EPayConfigurationsApi;
    public readonly LabsApi: LabsApi;
    public readonly MyMemberCertificationsApi: MyMemberCertificationsApi;
    public readonly MyMembersApi: MyMembersApi;
    public readonly MySecuritysApi: MySecuritysApi;
    public readonly PortalConfigurationPaymentProcessorsApi: PortalConfigurationPaymentProcessorsApi;
    public readonly ProcurementSettingsApi: ProcurementSettingsApi;
    public readonly WorkflowAttachmentsApi: WorkflowAttachmentsApi;
    private readonly authKey: string;
    private readonly hostURL: URL;
    private readonly clientID: string;
    public constructor(publicKey: string, privateKey: string);
    public constructor(publicKey: string, privateKey: string, hostInfo: string, companyID: string);
    public constructor(publicKey: string, privateKey: string, hostInfo: string, companyID: string, codeBase: string);
    public constructor(publicKey: string, privateKey: string, hostInfo: string, companyID: string, codeBase: string, clientID: string);
    public constructor(publicKey: string, privateKey: string, hostInfo: ManageCompanyInfo);
    public constructor(publicKey: string, privateKey: string, hostInfo?: ManageCompanyInfo | string, companyID?: string, codeBase?: string, clientID?: string) {
        let host: string = 'api-na.myconnectwise.net';
        let base: string = 'v2018_3';
        let company: string = 'CW';
        if (companyID && companyID.length > 0) {
            company = companyID;
        }
        if (codeBase && codeBase.length > 0) {
            base = codeBase;
        }
        if (ApiClient.isManageCompanyInfo(hostInfo)) {
            host = hostInfo.CompanyID;
            base = hostInfo.Codebase;
        } else if (typeof hostInfo === 'string') {
            host = hostInfo;
        }
        if (clientID) {
            this.clientID = clientID;
        }
        this.hostURL = new URL(`${base}/apis/3.0`, encodeURI(`https://${host}/`).toString());
        this.authKey = Buffer.from(`${company}+${publicKey}:${privateKey}`).toString('base64');
        this.AccountingPackagesApi = new AccountingPackagesApi(this.hostURL.toString());
        this.AddressFormatsApi = new AddressFormatsApi(this.hostURL.toString());
        this.AgreementBatchSetupsApi = new AgreementBatchSetupsApi(this.hostURL.toString());
        this.AgreementTypeBoardDefaultsApi = new AgreementTypeBoardDefaultsApi(this.hostURL.toString());
        this.AgreementTypeWorkRoleExclusionsApi = new AgreementTypeWorkRoleExclusionsApi(this.hostURL.toString());
        this.AgreementTypeWorkRolesApi = new AgreementTypeWorkRolesApi(this.hostURL.toString());
        this.AgreementTypeWorkTypeExclusionsApi = new AgreementTypeWorkTypeExclusionsApi(this.hostURL.toString());
        this.AgreementTypeWorkTypesApi = new AgreementTypeWorkTypesApi(this.hostURL.toString());
        this.AuthAnvilsApi = new AuthAnvilsApi(this.hostURL.toString());
        this.BillingCyclesApi = new BillingCyclesApi(this.hostURL.toString());
        this.BillingSetupRoutingsApi = new BillingSetupRoutingsApi(this.hostURL.toString());
        this.BillingSetupsApi = new BillingSetupsApi(this.hostURL.toString());
        this.BillingStatusesApi = new BillingStatusesApi(this.hostURL.toString());
        this.BillingTermsApi = new BillingTermsApi(this.hostURL.toString());
        this.BoardAutoAssignResourcesApi = new BoardAutoAssignResourcesApi(this.hostURL.toString());
        this.BoardAutoTemplatesApi = new BoardAutoTemplatesApi(this.hostURL.toString());
        this.BoardItemAssociationsApi = new BoardItemAssociationsApi(this.hostURL.toString());
        this.BoardNotificationsApi = new BoardNotificationsApi(this.hostURL.toString());
        this.BoardStatusNotificationsApi = new BoardStatusNotificationsApi(this.hostURL.toString());
        this.BoardTypeSubTypeItemAssociationsApi = new BoardTypeSubTypeItemAssociationsApi(this.hostURL.toString());
        this.CalendarsApi = new CalendarsApi(this.hostURL.toString());
        this.ChargeCodeExpenseTypesApi = new ChargeCodeExpenseTypesApi(this.hostURL.toString());
        this.ChargeCodesApi = new ChargeCodesApi(this.hostURL.toString());
        this.ClassificationsApi = new ClassificationsApi(this.hostURL.toString());
        this.CommissionsApi = new CommissionsApi(this.hostURL.toString());
        this.CompanyGroupsApi = new CompanyGroupsApi(this.hostURL.toString());
        this.CompanyPickerItemsApi = new CompanyPickerItemsApi(this.hostURL.toString());
        this.ConfigurationTypeQuestionValuesApi = new ConfigurationTypeQuestionValuesApi(this.hostURL.toString());
        this.ContactGroupsApi = new ContactGroupsApi(this.hostURL.toString());
        this.CorporateStructureLevelsApi = new CorporateStructureLevelsApi(this.hostURL.toString());
        this.CorporateStructuresApi = new CorporateStructuresApi(this.hostURL.toString());
        this.CountriesApi = new CountriesApi(this.hostURL.toString());
        this.CrmsApi = new CrmsApi(this.hostURL.toString());
        this.CustomReportParametersApi = new CustomReportParametersApi(this.hostURL.toString());
        this.CustomReportsApi = new CustomReportsApi(this.hostURL.toString());
        this.DeliveryMethodsApi = new DeliveryMethodsApi(this.hostURL.toString());
        this.DepartmentLocationsApi = new DepartmentLocationsApi(this.hostURL.toString());
        this.DepartmentsApi = new DepartmentsApi(this.hostURL.toString());
        this.DocumentsSetupApi = new DocumentsSetupApi(this.hostURL.toString());
        this.EmailConnectorParsingRulesApi = new EmailConnectorParsingRulesApi(this.hostURL.toString());
        this.EmailConnectorParsingStylesApi = new EmailConnectorParsingStylesApi(this.hostURL.toString());
        this.EmailConnectorsApi = new EmailConnectorsApi(this.hostURL.toString());
        this.EmailTokensApi = new EmailTokensApi(this.hostURL.toString());
        this.ExpenseReportsApi = new ExpenseReportsApi(this.hostURL.toString());
        this.ExpenseTypeExternalIntegrationReferencesApi = new ExpenseTypeExternalIntegrationReferencesApi(this.hostURL.toString());
        this.HolidayListsApi = new HolidayListsApi(this.hostURL.toString());
        this.HolidaysApi = new HolidaysApi(this.hostURL.toString());
        this.ImapsApi = new ImapsApi(this.hostURL.toString());
        this.ImpactsApi = new ImpactsApi(this.hostURL.toString());
        this.ImportsMassMaintenanceApi = new ImportsMassMaintenanceApi(this.hostURL.toString());
        this.IntegratorLoginsApi = new IntegratorLoginsApi(this.hostURL.toString());
        this.InvoiceEmailTemplatesApi = new InvoiceEmailTemplatesApi(this.hostURL.toString());
        this.InvoiceTemplatesApi = new InvoiceTemplatesApi(this.hostURL.toString());
        this.InvoiceTemplateSetupsApi = new InvoiceTemplateSetupsApi(this.hostURL.toString());
        this.KPICategoriesApi = new KPICategoriesApi(this.hostURL.toString());
        this.KPIsApi = new KPIsApi(this.hostURL.toString());
        this.LdapConfigurationsApi = new LdapConfigurationsApi(this.hostURL.toString());
        this.LegacyCampaignSubTypesApi = new LegacyCampaignSubTypesApi(this.hostURL.toString());
        this.LegacySubCategoriesApi = new LegacySubCategoriesApi(this.hostURL.toString());
        this.LocationDepartmentsApi = new LocationDepartmentsApi(this.hostURL.toString());
        this.LocationWorkRolesApi = new LocationWorkRolesApi(this.hostURL.toString());
        this.ManagedDevicesIntegrationCrossReferencesApi = new ManagedDevicesIntegrationCrossReferencesApi(this.hostURL.toString());
        this.ManagedDevicesIntegrationLoginsApi = new ManagedDevicesIntegrationLoginsApi(this.hostURL.toString());
        this.ManagedDevicesIntegrationNotificationsApi = new ManagedDevicesIntegrationNotificationsApi(this.hostURL.toString());
        this.ManagedDevicesIntegrationsApi = new ManagedDevicesIntegrationsApi(this.hostURL.toString());
        this.ManagementExecuteManagedItSyncsApi = new ManagementExecuteManagedItSyncsApi(this.hostURL.toString());
        this.ManagementItSolutionAgreementInterfaceParametersApi = new ManagementItSolutionAgreementInterfaceParametersApi(this.hostURL.toString());
        this.ManagementItSolutionsApi = new ManagementItSolutionsApi(this.hostURL.toString());
        this.ManagementLogsApi = new ManagementLogsApi(this.hostURL.toString());
        this.ManagementNetworksSecurityApi = new ManagementNetworksSecurityApi(this.hostURL.toString());
        this.ManagementReportNotificationsApi = new ManagementReportNotificationsApi(this.hostURL.toString());
        this.ManagementsApi = new ManagementsApi(this.hostURL.toString());
        this.MemberAccrualsApi = new MemberAccrualsApi(this.hostURL.toString());
        this.MemberCertificationsApi = new MemberCertificationsApi(this.hostURL.toString());
        this.MemberDelegationsApi = new MemberDelegationsApi(this.hostURL.toString());
        this.MemberSkillsApi = new MemberSkillsApi(this.hostURL.toString());
        this.MenuEntryLocationsApi = new MenuEntryLocationsApi(this.hostURL.toString());
        this.NotificationRecipientsApi = new NotificationRecipientsApi(this.hostURL.toString());
        this.OrderStatusesEmailTemplateApi = new OrderStatusesEmailTemplateApi(this.hostURL.toString());
        this.OrderStatusNotificationsApi = new OrderStatusNotificationsApi(this.hostURL.toString());
        this.OthersApi = new OthersApi(this.hostURL.toString());
        this.ParsingTypesApi = new ParsingTypesApi(this.hostURL.toString());
        this.ParsingVariablesApi = new ParsingVariablesApi(this.hostURL.toString());
        this.PaymentTypesApi = new PaymentTypesApi(this.hostURL.toString());
        this.PortalCalendarsApi = new PortalCalendarsApi(this.hostURL.toString());
        this.PortalConfigurationInvoiceSetupsApi = new PortalConfigurationInvoiceSetupsApi(this.hostURL.toString());
        this.PortalConfigurationOpportunitySetupsApi = new PortalConfigurationOpportunitySetupsApi(this.hostURL.toString());
        this.PortalConfigurationPasswordEmailSetupsApi = new PortalConfigurationPasswordEmailSetupsApi(this.hostURL.toString());
        this.PortalConfigurationProjectSetupsApi = new PortalConfigurationProjectSetupsApi(this.hostURL.toString());
        this.PortalConfigurationsApi = new PortalConfigurationsApi(this.hostURL.toString());
        this.PortalConfigurationServiceSetupsApi = new PortalConfigurationServiceSetupsApi(this.hostURL.toString());
        this.PortalReportsApi = new PortalReportsApi(this.hostURL.toString());
        this.PortalSecuritySettingsApi = new PortalSecuritySettingsApi(this.hostURL.toString());
        this.PortalSecurityLevelsApi = new PortalSecurityLevelsApi(this.hostURL.toString());
        this.ProjectSecurityRolesApi = new ProjectSecurityRolesApi(this.hostURL.toString());
        this.ProjectSecurityRoleSettingsApi = new ProjectSecurityRoleSettingsApi(this.hostURL.toString());
        this.ProjectStatusesApi = new ProjectStatusesApi(this.hostURL.toString());
        this.ProjectTypesApi = new ProjectTypesApi(this.hostURL.toString());
        this.PurchaseOrderStatusEmailTemplatesApi = new PurchaseOrderStatusEmailTemplatesApi(this.hostURL.toString());
        this.PurchaseOrderStatusesApi = new PurchaseOrderStatusesApi(this.hostURL.toString());
        this.PurchaseOrderStatusNotificationsApi = new PurchaseOrderStatusNotificationsApi(this.hostURL.toString());
        this.ReportCardDetailsApi = new ReportCardDetailsApi(this.hostURL.toString());
        this.ReportCardsApi = new ReportCardsApi(this.hostURL.toString());
        this.ReportingServicesApi = new ReportingServicesApi(this.hostURL.toString());
        this.RmaStatusEmailTemplatesApi = new RmaStatusEmailTemplatesApi(this.hostURL.toString());
        this.RmaStatusesApi = new RmaStatusesApi(this.hostURL.toString());
        this.RmaStatusNotificationsApi = new RmaStatusNotificationsApi(this.hostURL.toString());
        this.SalesQuotasApi = new SalesQuotasApi(this.hostURL.toString());
        this.SalesTeamMembersApi = new SalesTeamMembersApi(this.hostURL.toString());
        this.SalesTeamsApi = new SalesTeamsApi(this.hostURL.toString());
        this.ScheduleColorsApi = new ScheduleColorsApi(this.hostURL.toString());
        this.ScheduleDetailsApi = new ScheduleDetailsApi(this.hostURL.toString());
        this.SecurityRolesApi = new SecurityRolesApi(this.hostURL.toString());
        this.SecurityRoleSettingsApi = new SecurityRoleSettingsApi(this.hostURL.toString());
        this.ServiceEmailTemplatesApi = new ServiceEmailTemplatesApi(this.hostURL.toString());
        this.ServiceLocationsApi = new ServiceLocationsApi(this.hostURL.toString());
        this.ServicesApi = new ServicesApi(this.hostURL.toString());
        this.ServiceSignoffsApi = new ServiceSignoffsApi(this.hostURL.toString());
        this.ServiceSurveyQuestionsApi = new ServiceSurveyQuestionsApi(this.hostURL.toString());
        this.ServiceSurveysApi = new ServiceSurveysApi(this.hostURL.toString());
        this.ServiceTeamsApi = new ServiceTeamsApi(this.hostURL.toString());
        this.ServiceTemplatesApi = new ServiceTemplatesApi(this.hostURL.toString());
        this.SetupScreensApi = new SetupScreensApi(this.hostURL.toString());
        this.SeveritiesApi = new SeveritiesApi(this.hostURL.toString());
        this.SLAPrioritiesApi = new SLAPrioritiesApi(this.hostURL.toString());
        this.SLAsApi = new SLAsApi(this.hostURL.toString());
        this.StatesApi = new StatesApi(this.hostURL.toString());
        this.StatusExternalIntegrationReferencesApi = new StatusExternalIntegrationReferencesApi(this.hostURL.toString());
        this.SurveyOptionsApi = new SurveyOptionsApi(this.hostURL.toString());
        this.SurveyQuestionValuesApi = new SurveyQuestionValuesApi(this.hostURL.toString());
        this.TracksApi = new TracksApi(this.hostURL.toString());
        this.TaxCodeExpenseTypeExemptionsApi = new TaxCodeExpenseTypeExemptionsApi(this.hostURL.toString());
        this.TaxCodeProductTypeExemptionsApi = new TaxCodeProductTypeExemptionsApi(this.hostURL.toString());
        this.TaxCodeWorkRoleExemptionsApi = new TaxCodeWorkRoleExemptionsApi(this.hostURL.toString());
        this.TaxIntegrationsApi = new TaxIntegrationsApi(this.hostURL.toString());
        this.TeamMembersApi = new TeamMembersApi(this.hostURL.toString());
        this.TicketSyncsApi = new TicketSyncsApi(this.hostURL.toString());
        this.TimeAccrualDetailsApi = new TimeAccrualDetailsApi(this.hostURL.toString());
        this.TimeAccrualsApi = new TimeAccrualsApi(this.hostURL.toString());
        this.TimeExpensesApi = new TimeExpensesApi(this.hostURL.toString());
        this.TimePeriodsApi = new TimePeriodsApi(this.hostURL.toString());
        this.TimePeriodSetupsApi = new TimePeriodSetupsApi(this.hostURL.toString());
        this.TimeSheetsApi = new TimeSheetsApi(this.hostURL.toString());
        this.TimeZonesApi = new TimeZonesApi(this.hostURL.toString());
        this.TimeZoneSetupsApi = new TimeZoneSetupsApi(this.hostURL.toString());
        this.TrackActionsApi = new TrackActionsApi(this.hostURL.toString());
        this.WarehouseBinsApi = new WarehouseBinsApi(this.hostURL.toString());
        this.WarehousesApi = new WarehousesApi(this.hostURL.toString());
        this.WorkflowActionAutomateParametersApi = new WorkflowActionAutomateParametersApi(this.hostURL.toString());
        this.WorkflowActionsApi = new WorkflowActionsApi(this.hostURL.toString());
        this.WorkflowEventsApi = new WorkflowEventsApi(this.hostURL.toString());
        this.WorkflowNotifyTypesApi = new WorkflowNotifyTypesApi(this.hostURL.toString());
        this.WorkflowsApi = new WorkflowsApi(this.hostURL.toString());
        this.WorkflowTableTypesApi = new WorkflowTableTypesApi(this.hostURL.toString());
        this.WorkflowTriggerOptionsApi = new WorkflowTriggerOptionsApi(this.hostURL.toString());
        this.WorkflowTriggersApi = new WorkflowTriggersApi(this.hostURL.toString());
        this.WorkRoleLocationsApi = new WorkRoleLocationsApi(this.hostURL.toString());
        this.WorkRolesApi = new WorkRolesApi(this.hostURL.toString());
        this.WorkTypeExternalIntegrationReferencesApi = new WorkTypeExternalIntegrationReferencesApi(this.hostURL.toString());
        this.WorkTypesApi = new WorkTypesApi(this.hostURL.toString());
        this.AccountingBatchesApi = new AccountingBatchesApi(this.hostURL.toString());
        this.AccountingUnpostedExpensesApi = new AccountingUnpostedExpensesApi(this.hostURL.toString());
        this.AccountingUnpostedProcurementsApi = new AccountingUnpostedProcurementsApi(this.hostURL.toString());
        this.AccountingUnpostedinvoicesApi = new AccountingUnpostedinvoicesApi(this.hostURL.toString());
        this.ActivitiesApi = new ActivitiesApi(this.hostURL.toString());
        this.ActivityStatusesApi = new ActivityStatusesApi(this.hostURL.toString());
        this.ActivityStopwatchesApi = new ActivityStopwatchesApi(this.hostURL.toString());
        this.ActivityTypesApi = new ActivityTypesApi(this.hostURL.toString());
        this.AdjustmentDetailsApi = new AdjustmentDetailsApi(this.hostURL.toString());
        this.AdjustmentTypesApi = new AdjustmentTypesApi(this.hostURL.toString());
        this.AdjustmentsApi = new AdjustmentsApi(this.hostURL.toString());
        this.AgreementSitesApi = new AgreementSitesApi(this.hostURL.toString());
        this.AgreementAdditionsApi = new AgreementAdditionsApi(this.hostURL.toString());
        this.AgreementAdjustmentsApi = new AgreementAdjustmentsApi(this.hostURL.toString());
        this.AgreementBoardDefaultsApi = new AgreementBoardDefaultsApi(this.hostURL.toString());
        this.AgreementTypesApi = new AgreementTypesApi(this.hostURL.toString());
        this.AgreementWorkRoleExclusionsApi = new AgreementWorkRoleExclusionsApi(this.hostURL.toString());
        this.AgreementWorkRolesApi = new AgreementWorkRolesApi(this.hostURL.toString());
        this.AgreementWorkTypeExclusionsApi = new AgreementWorkTypeExclusionsApi(this.hostURL.toString());
        this.AgreementWorkTypesApi = new AgreementWorkTypesApi(this.hostURL.toString())
        this.AgreementsApi = new AgreementsApi(this.hostURL.toString());
        this.AuditTrailApi = new AuditTrailApi(this.hostURL.toString());
        this.BatchApi = new BatchApi(this.hostURL.toString());
        this.BoardExcludedMembersApi = new BoardExcludedMembersApi(this.hostURL.toString());
        this.BoardItemsApi = new BoardItemsApi(this.hostURL.toString());
        this.BoardStatusesApi = new BoardStatusesApi(this.hostURL.toString());
        this.BoardSubTypesApi = new BoardSubTypesApi(this.hostURL.toString());
        this.BoardTeamsApi = new BoardTeamsApi(this.hostURL.toString());
        this.BoardTypesApi = new BoardTypesApi(this.hostURL.toString());
        this.BoardsApi = new BoardsApi(this.hostURL.toString());
        this.CallbacksApi = new CallbacksApi(this.hostURL.toString());
        this.CampaignAuditsApi = new CampaignAuditsApi(this.hostURL.toString());
        this.CampaignEmailsOpenedApi = new CampaignEmailsOpenedApi(this.hostURL.toString());
        this.CampaignFormsSubmittedApi = new CampaignFormsSubmittedApi(this.hostURL.toString());
        this.CampaignLinksClickedApi = new CampaignLinksClickedApi(this.hostURL.toString());
        this.CampaignStatusesApi = new CampaignStatusesApi(this.hostURL.toString());
        this.CampaignSubTypesApi = new CampaignSubTypesApi(this.hostURL.toString());
        this.CampaignTypesApi = new CampaignTypesApi(this.hostURL.toString());
        this.CampaignsApi = new CampaignsApi(this.hostURL.toString());
        this.CatalogComponentsApi = new CatalogComponentsApi(this.hostURL.toString());
        this.CatalogsItemApi = new CatalogsItemApi(this.hostURL.toString());
        this.CategoriesApi = new CategoriesApi(this.hostURL.toString());
        this.CertificationsApi = new CertificationsApi(this.hostURL.toString());
        this.CodesApi = new CodesApi(this.hostURL.toString());
        this.CompaniesApi = new CompaniesApi(this.hostURL.toString());
        this.CompanyCustomNotesApi = new CompanyCustomNotesApi(this.hostURL.toString());
        this.CompanyManagementSummaryReportsApi = new CompanyManagementSummaryReportsApi(this.hostURL.toString());
        this.CompanyNotesApi = new CompanyNotesApi(this.hostURL.toString());
        this.CompanyNoteTypesApi = new CompanyNoteTypesApi(this.hostURL.toString());
        this.CompanySitesApi = new CompanySitesApi(this.hostURL.toString());
        this.CompanyStatusesApi = new CompanyStatusesApi(this.hostURL.toString());
        this.CompanyTeamsApi = new CompanyTeamsApi(this.hostURL.toString());
        this.CompanyTypesApi = new CompanyTypesApi(this.hostURL.toString());
        this.ConfigurationStatusesApi = new ConfigurationStatusesApi(this.hostURL.toString());
        this.ConfigurationTypeQuestionsApi = new ConfigurationTypeQuestionsApi(this.hostURL.toString());
        this.ConfigurationTypesApi = new ConfigurationTypesApi(this.hostURL.toString());
        this.ContactsApi = new ContactsApi(this.hostURL.toString());
        this.CurrenciesApi = new CurrenciesApi(this.hostURL.toString());
        this.ConfigurationsApi = new ConfigurationsApi(this.hostURL.toString());
        this.ContactNotesApi = new ContactNotesApi(this.hostURL.toString());
        this.ContactTypesApi = new ContactTypesApi(this.hostURL.toString());
        this.ContactTracksApi = new ContactTracksApi(this.hostURL.toString());
        this.ContactDepartmentsApi = new ContactDepartmentsApi(this.hostURL.toString());
        this.ContactRelationshipsApi = new ContactRelationshipsApi(this.hostURL.toString());
        this.ContactCommunicationsApi = new ContactCommunicationsApi(this.hostURL.toString());
        this.ConnectWiseHostedSetupsApi = new ConnectWiseHostedSetupsApi(this.hostURL.toString());
        this.DocumentsApi = new DocumentsApi(this.hostURL.toString());
        this.ExpenseEntriesApi = new ExpenseEntriesApi(this.hostURL.toString());
        this.ExpenseTypesApi = new ExpenseTypesApi(this.hostURL.toString());
        this.GroupCompaniesApi = new GroupCompaniesApi(this.hostURL.toString());
        this.GroupsApi = new GroupsApi(this.hostURL.toString());
        this.GroupContactsApi = new GroupContactsApi(this.hostURL.toString());
        this.InfoApi = new InfoApi(this.hostURL.toString());
        this.InOutBoardsApi = new InOutBoardsApi(this.hostURL.toString());
        this.InOutTypesApi = new InOutTypesApi(this.hostURL.toString());
        this.InvoicesApi = new InvoicesApi(this.hostURL.toString());
        this.InvoicePaymentsApi = new InvoicePaymentsApi(this.hostURL.toString());
        this.KnowledgeBaseArticlesApi = new KnowledgeBaseArticlesApi(this.hostURL.toString());
        this.LinksApi = new LinksApi(this.hostURL.toString());
        this.LocationsApi = new LocationsApi(this.hostURL.toString());
        this.MembersApi = new MembersApi(this.hostURL.toString());
        this.MemberTypesApi = new MemberTypesApi(this.hostURL.toString());
        this.ManufacturersApi = new ManufacturersApi(this.hostURL.toString());
        this.ManagementBackupsApi = new ManagementBackupsApi(this.hostURL.toString());
        this.MarketDescriptionsApi = new MarketDescriptionsApi(this.hostURL.toString());
        this.MenuEntriesApi = new MenuEntriesApi(this.hostURL.toString());
        this.OpportunitiesApi = new OpportunitiesApi(this.hostURL.toString());
        this.OrdersApi = new OrdersApi(this.hostURL.toString());
        this.OrderStatusesApi = new OrderStatusesApi(this.hostURL.toString());
        this.OpportunityNotesApi = new OpportunityNotesApi(this.hostURL.toString());
        this.OpportunityTeamsApi = new OpportunityTeamsApi(this.hostURL.toString());
        this.OpportunityTypesApi = new OpportunityTypesApi(this.hostURL.toString());
        this.OpportunityRatingsApi = new OpportunityRatingsApi(this.hostURL.toString());
        this.OpportunityContactsApi = new OpportunityContactsApi(this.hostURL.toString());
        this.OpportunityStatusesApi = new OpportunityStatusesApi(this.hostURL.toString());
        this.OpportunityStagesApi = new OpportunityStagesApi(this.hostURL.toString());
        this.OpportunityForecastsApi = new OpportunityForecastsApi(this.hostURL.toString());
        this.OwnershipTypesApi = new OwnershipTypesApi(this.hostURL.toString());
        this.PricingBreaksApi = new PricingBreaksApi(this.hostURL.toString());
        this.ProjectsApi = new ProjectsApi(this.hostURL.toString());
        this.PrioritiesApi = new PrioritiesApi(this.hostURL.toString());
        this.ProductsItemApi = new ProductsItemApi(this.hostURL.toString());
        this.ProductTypesApi = new ProductTypesApi(this.hostURL.toString());
        this.ProjectNotesApi = new ProjectNotesApi(this.hostURL.toString());
        this.ProjectPhasesApi = new ProjectPhasesApi(this.hostURL.toString());
        this.PricingDetailsApi = new PricingDetailsApi(this.hostURL.toString());
        this.PurchaseOrdersApi = new PurchaseOrdersApi(this.hostURL.toString());
        this.ProjectContactsApi = new ProjectContactsApi(this.hostURL.toString());
        this.PricingSchedulesApi = new PricingSchedulesApi(this.hostURL.toString());
        this.ProductComponentsApi = new ProductComponentsApi(this.hostURL.toString());
        this.ProjectsTeamMembersApi = new ProjectsTeamMembersApi(this.hostURL.toString());
        this.PurchaseOrderLineItemsApi = new PurchaseOrderLineItemsApi(this.hostURL.toString());
        this.ProductPickingShippingDetailsApi = new ProductPickingShippingDetailsApi(this.hostURL.toString());
        this.ReportsApi = new ReportsApi(this.hostURL.toString());
        this.RmaActionsApi = new RmaActionsApi(this.hostURL.toString());
        this.RmaDispositionsApi = new RmaDispositionsApi(this.hostURL.toString());
        this.RolesApi = new RolesApi(this.hostURL.toString());
        this.SalesProbabilitiesApi = new SalesProbabilitiesApi(this.hostURL.toString());
        this.SourcesApi = new SourcesApi(this.hostURL.toString());
        this.SurveysApi = new SurveysApi(this.hostURL.toString());
        this.ScheduleTypesApi = new ScheduleTypesApi(this.hostURL.toString());
        this.SubCategoriesApi = new SubCategoriesApi(this.hostURL.toString());
        this.SurveyResultsApi = new SurveyResultsApi(this.hostURL.toString());
        this.ScheduleEntriesApi = new ScheduleEntriesApi(this.hostURL.toString());
        this.ShipmentMethodsApi = new ShipmentMethodsApi(this.hostURL.toString());
        this.SurveyQuestionsApi = new SurveyQuestionsApi(this.hostURL.toString());
        this.ScheduleStatusesApi = new ScheduleStatusesApi(this.hostURL.toString());
        this.ScheduleStopwatchesApi = new ScheduleStopwatchesApi(this.hostURL.toString());
        this.ScheduleReminderTimesApi = new ScheduleReminderTimesApi(this.hostURL.toString());
        this.TaxCodeXRefsApi = new TaxCodeXRefsApi(this.hostURL.toString());
        this.TeamRolesApi = new TeamRolesApi(this.hostURL.toString());
        this.SkillsApi = new SkillsApi(this.hostURL.toString());
        this.SkillCategoriesApi = new SkillCategoriesApi(this.hostURL.toString());
        this.TodayPageCategoriesApi = new TodayPageCategoriesApi(this.hostURL.toString());
        this.TicketsApi = new TicketsApi(this.hostURL.toString());
        this.TaxCodesApi = new TaxCodesApi(this.hostURL.toString());
        this.TicketNotesApi = new TicketNotesApi(this.hostURL.toString());
        this.TicketTasksApi = new TicketTasksApi(this.hostURL.toString());
        this.TimeEntriesApi = new TimeEntriesApi(this.hostURL.toString());
        this.TicketStopwatchesApi = new TicketStopwatchesApi(this.hostURL.toString());
        this.UnitOfMeasureConversionsApi = new UnitOfMeasureConversionsApi(this.hostURL.toString());
        this.UnitOfMeasuresApi = new UnitOfMeasuresApi(this.hostURL.toString());
        this.UserDefinedFieldsApi = new UserDefinedFieldsApi(this.hostURL.toString());
        this.ClosedInvoicesApi = new ClosedInvoicesApi(this.hostURL.toString());
        this.EntityTypesApi = new EntityTypesApi(this.hostURL.toString());
        this.EPayConfigurationsApi = new EPayConfigurationsApi(this.hostURL.toString());
        this.LabsApi = new LabsApi(this.hostURL.toString());
        this.MyMemberCertificationsApi = new MyMemberCertificationsApi(this.hostURL.toString());
        this.MyMembersApi = new MyMembersApi(this.hostURL.toString());
        this.MySecuritysApi = new MySecuritysApi(this.hostURL.toString());
        this.PortalConfigurationPaymentProcessorsApi = new PortalConfigurationPaymentProcessorsApi(this.hostURL.toString());
        this.ProcurementSettingsApi = new ProcurementSettingsApi(this.hostURL.toString());
        this.WorkflowAttachmentsApi = new WorkflowAttachmentsApi(this.hostURL.toString());
        Object.getOwnPropertyNames(this).filter((property: string): boolean => property.toLowerCase().includes('api')).forEach((property: string): void => {
            if (this.clientID) {
                // @ts-ignore
                Reflect.defineProperty(this[property], 'defaultHeaders', {
                    value: { 'Authorization': `Basic ${this.authKey}`, 'ClientID': this.clientID }
                });
            } else {
                // @ts-ignore
                Reflect.defineProperty(this[property], 'defaultHeaders', {
                    value: { 'Authorization': `Basic ${this.authKey}` }
                });
            }
        });
    };
    private static isManageCompanyInfo(hostInfo: string | ManageCompanyInfo): hostInfo is ManageCompanyInfo {
        return (<ManageCompanyInfo>hostInfo).CompanyID !== undefined && (<ManageCompanyInfo>hostInfo).Codebase !== undefined;
    };

    public static async getManageCompanyInfo(host: string, companyID: string): Promise<ManageCompanyInfo> {
        try {
            const address: URL = new URL(encodeURIComponent(`/login/companyinfo/${companyID}`), encodeURIComponent(`https://${host}/`));
            const response: Response = await fetch(encodeURI(address.toString()), { method: 'GET' });
            if (response.ok) {
                const info: ManageCompanyInfo = await response.json();
                return Promise.resolve(info);
            }
        } catch (error) {
            return Promise.reject<ManageCompanyInfo>(error);
        }
    };
};

export * from './api/api';
export default ApiClient;