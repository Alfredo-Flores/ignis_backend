    fragment Role on Role {
        id
        createdAt
        updatedAt
        code
        description
        permissions
        channels {
            id
            code
            token
        }
    }
`,vy=K.Ps`
    fragment Administrator on Administrator {
        id
        createdAt
        updatedAt
        firstName
        lastName
        emailAddress
        user {
            id
            identifier
            lastLogin
            roles {
                ...Role
            }
        }
    }
    ${my}
`,yy=K.Ps`
    query GetAdministrators($options: AdministratorListOptions) {
        administrators(options: $options) {
            items {
                ...Administrator
            }
            totalItems
        }
    }
    ${vy}
`,by=K.Ps`
    query GetActiveAdministrator {
        activeAdministrator {
            ...Administrator
        }
    }
    ${vy}
`,Cy=K.Ps`
    query GetAdministrator($id: ID!) {
        administrator(id: $id) {
            ...Administrator
        }
    }
    ${vy}
`,_y=K.Ps`
    mutation CreateAdministrator($input: CreateAdministratorInput!) {
        createAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${vy}
`,wy=K.Ps`
    mutation UpdateAdministrator($input: UpdateAdministratorInput!) {
        updateAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${vy}
`,Sy=K.Ps`
    mutation UpdateActiveAdministrator($input: UpdateActiveAdministratorInput!) {
        updateActiveAdministrator(input: $input) {
            ...Administrator
        }
    }
    ${vy}
`,Ay=K.Ps`
    mutation DeleteAdministrator($id: ID!) {
        deleteAdministrator(id: $id) {
            result
            message
        }
    }
`,xy=K.Ps`
    query GetRoles($options: RoleListOptions) {
        roles(options: $options) {
            items {
                ...Role
            }
            totalItems
        }
    }
    ${my}
`,My=K.Ps`
    query GetRole($id: ID!) {
        role(id: $id) {
            ...Role
        }
    }
    ${my}
`,Iy=K.Ps`
    mutation CreateRole($input: CreateRoleInput!) {
        createRole(input: $input) {
            ...Role
        }
    }
    ${my}
`,Ly=K.Ps`
    mutation UpdateRole($input: UpdateRoleInput!) {
        updateRole(input: $input) {
            ...Role
        }
    }
    ${my}
`,ky=K.Ps`
    mutation DeleteRole($id: ID!) {
        deleteRole(id: $id) {
            result
            message
        }
    }
`;K.Ps`
    mutation AssignRoleToAdministrator($administratorId: ID!, $roleId: ID!) {
        assignRoleToAdministrator(administratorId: $administratorId, roleId: $roleId) {
            ...Administrator
        }
    }
    ${vy}
`;class Oy{constructor(t){this.baseDataService=t}getAdministrators(t=10,e=0){return this.baseDataService.query(yy,{options:{take:t,skip:e}})}getActiveAdministrator(){return this.baseDataService.query(by,{})}getAdministrator(t){return this.baseDataService.query(Cy,{id:t})}createAdministrator(t){return this.baseDataService.mutate(_y,{input:t})}updateAdministrator(t){return this.baseDataService.mutate(wy,{input:t})}updateActiveAdministrator(t){return this.baseDataService.mutate(Sy,{input:t})}deleteAdministrator(t){return this.baseDataService.mutate(Ay,{id:t})}getRoles(t=10,e=0){return this.baseDataService.query(xy,{options:{take:t,skip:e}})}getRole(t){return this.baseDataService.query(My,{id:t})}createRole(t){return this.baseDataService.mutate(Iy,{input:t})}updateRole(t){return this.baseDataService.mutate(Ly,{input:t})}deleteRole(t){return this.baseDataService.mutate(ky,{id:t})}}const Vy=K.Ps`
    fragment ConfigurableOperation on ConfigurableOperation {
        args {
            name
            value
        }
        code
    }
`,Ey=K.Ps`
    fragment ConfigurableOperationDef on ConfigurableOperationDefinition {
        args {
            name
            type
            required
            defaultValue
            list
            ui
            label
            description
        }
        code
        description
    }
`,Ty=K.Ps`
    fragment ErrorResult on ErrorResult {
        errorCode
        message
    }
`,Zy=K.Ps`
    fragment CurrentUser on CurrentUser {
        id
        identifier
        channels {
            id
            code
            token
            permissions
        }
    }
`,Dy=K.Ps`
    mutation AttemptLogin($username: String!, $password: String!, $rememberMe: Boolean!) {
        login(username: $username, password: $password, rememberMe: $rememberMe) {
            ...CurrentUser
            ...ErrorResult
        }
    }
    ${Zy}
    ${Ty}
`,Py=K.Ps`
    mutation LogOut {
        logout {
            success
        }
    }
`,Hy=K.Ps`
    query GetCurrentUser {
        me {
            ...CurrentUser
        }
    }
    ${Zy}
`;class Fy{constructor(t){this.baseDataService=t}currentUser(){return this.baseDataService.query(Hy)}attemptLogin(t,e,n){return this.baseDataService.mutate(Dy,{username:t,password:e,rememberMe:n})}logOut(){return this.baseDataService.mutate(Py)}}class Ry{constructor(t){this.location=t}set(t,e){const n=this.keyName(t);localStorage.setItem(n,JSON.stringify(e))}setForCurrentLocation(t,e){const n=this.getLocationBasedKey(t);this.set(n,e)}setForSession(t,e){const n=this.keyName(t);sessionStorage.setItem(n,JSON.stringify(e))}get(t){const e=this.keyName(t),n=sessionStorage.getItem(e)||localStorage.getItem(e);let r;try{r=JSON.parse(n||"null")}catch(i){console.error(`Could not parse the localStorage value for "${t}" (${n})`)}return r}getForCurrentLocation(t){const e=this.getLocationBasedKey(t);return this.get(e)}remove(t){const e=this.keyName(t);sessionStorage.removeItem(e),localStorage.removeItem(e)}getLocationBasedKey(t){return t+this.location.path()}keyName(t){return"vnd_"+t}}Ry.\u0275fac=function(t){return new(t||Ry)(r.LFG(i.Ye))},Ry.\u0275prov=r.Yz7({factory:function(){return new Ry(r.LFG(i.Ye))},token:Ry,providedIn:"root"}),Ry.ctorParameters=()=>[{type:i.Ye}];const Ny=K.Ps`
    mutation RequestStarted {
        requestStarted @client
    }
`,By=K.Ps`
    mutation RequestCompleted {
        requestCompleted @client
    }
`,jy=K.Ps`
    fragment UserStatus on UserStatus {
        username
        isLoggedIn
        loginTime
        activeChannelId
        permissions
        channels {
            id
            code
            token
            permissions
        }
    }
`,qy=K.Ps`
    mutation SetAsLoggedIn($input: UserStatusInput!) {
        setAsLoggedIn(input: $input) @client {
            ...UserStatus
        }
    }
    ${jy}
`,zy=K.Ps`
    mutation SetAsLoggedOut {
        setAsLoggedOut @client {
            ...UserStatus
        }
    }
    ${jy}
`,Gy=K.Ps`
    mutation SetUiLanguage($languageCode: LanguageCode!, $locale: String) {
        setUiLanguage(languageCode: $languageCode) @client
        setUiLocale(locale: $locale) @client
    }
`,Yy=K.Ps`
    mutation SetUiLocale($locale: String) {
        setUiLocale(locale: $locale) @client
    }
`,$y=K.Ps`
    mutation SetDisplayUiExtensionPoints($display: Boolean!) {
        setDisplayUiExtensionPoints(display: $display) @client
    }
`,Uy=K.Ps`
    mutation SetContentLanguage($languageCode: LanguageCode!) {
        setContentLanguage(languageCode: $languageCode) @client
    }
`,Jy=K.Ps`
    mutation SetUiTheme($theme: String!) {
        setUiTheme(theme: $theme) @client
    }
`,Qy=K.Ps`
    query GetNetworkStatus {
        networkStatus @client {
            inFlightRequests
        }
    }
`,Wy=K.Ps`
    query GetUserStatus {
        userStatus @client {
            ...UserStatus
        }
    }
    ${jy}
`,Ky=K.Ps`
    query GetUiState {
        uiState @client {
            language
            locale
            contentLanguage
            theme
            displayUiExtensionPoints
        }
    }
`,Xy=K.Ps`
    query GetClientState {
        networkStatus @client {
            inFlightRequests
        }
        userStatus @client {
            ...UserStatus
        }
        uiState @client {
            language
            locale
            contentLanguage
            theme
            displayUiExtensionPoints
        }
    }
    ${jy}
`,tb=K.Ps`
    mutation SetActiveChannel($channelId: ID!) {
        setActiveChannel(channelId: $channelId) @client {
            ...UserStatus
        }
    }
    ${jy}
`,eb=K.Ps`
    mutation UpdateUserChannels($channels: [CurrentUserChannelInput!]!) {
        updateUserChannels(channels: $channels) @client {
            ...UserStatus
        }
    }
    ${jy}
`;class nb{constructor(t,e){this.queryRef=t,this.apollo=e,this.completed$=new Gt.xQ,this.valueChanges=t.valueChanges}refetchOnChannelChange(){const t=this.apollo.watchQuery({query:Wy}).valueChanges,e=t.pipe((0,f.U)(t=>t.data.userStatus.activeChannelId),(0,g.h)(zt.notNullOrUndefined),(0,m.x)(),(0,v.T)(1),(0,y.R)(this.completed$)),n=t.pipe((0,f.U)(t=>t.data.userStatus.isLoggedIn),(0,m.x)(),(0,v.T)(1),(0,g.h)(t=>!t),(0,y.R)(this.completed$));return this.valueChanges=(0,Yt.T)(e,this.queryRef.valueChanges).pipe((0,b.b)(t=>{"string"==typeof t&&new Promise(t=>setTimeout(t,50)).then(()=>this.queryRef.refetch())}),(0,g.h)(t=>"string"!=typeof t),(0,y.R)(n),(0,y.R)(this.completed$)),this.queryRef.valueChanges=this.valueChanges,this}get single$(){return this.valueChanges.pipe((0,g.h)(t=>t.networkStatus===Bt.I.ready),(0,C.q)(1),(0,f.U)(t=>t.data),(0,_.x)(()=>{this.completed$.next(),this.completed$.complete()}))}get stream$(){return this.valueChanges.pipe((0,g.h)(t=>t.networkStatus===Bt.I.ready),(0,f.U)(t=>t.data),(0,_.x)(()=>{this.completed$.next(),this.completed$.complete()}))}get ref(){return this.queryRef}mapSingle(t){return this.single$.pipe((0,f.U)(t))}mapStream(t){return this.stream$.pipe((0,f.U)(t))}}const rb=K.Ps`
    fragment Country on Country {
        id
        createdAt
        updatedAt
        code
        name
        enabled
        translations {
            id
            languageCode
            name
        }
    }
`,ib=K.Ps`
    query GetCountryList($options: CountryListOptions) {
        countries(options: $options) {
            items {
                id
                code
                name
                enabled
            }
            totalItems
        }
    }
`,sb=K.Ps`
    query GetAvailableCountries {
        countries(options: { filter: { enabled: { eq: true } } }) {
            items {
                id
                code
                name
                enabled
            }
        }
    }
`,ob=K.Ps`
    query GetCountry($id: ID!) {
        country(id: $id) {
            ...Country
        }
    }
    ${rb}
`,ab=K.Ps`
    mutation CreateCountry($input: CreateCountryInput!) {
        createCountry(input: $input) {
            ...Country
        }
    }
    ${rb}
`,lb=K.Ps`
    mutation UpdateCountry($input: UpdateCountryInput!) {
        updateCountry(input: $input) {
            ...Country
        }
    }
    ${rb}
`,cb=K.Ps`
    mutation DeleteCountry($id: ID!) {
        deleteCountry(id: $id) {
            result
            message
        }
    }
`,ub=K.Ps`
    fragment Zone on Zone {
        id
        createdAt
        updatedAt
        name
        members {
            ...Country
        }
    }
    ${rb}
`,hb=K.Ps`
    query GetZones {
        zones {
            ...Zone
            members {
                createdAt
                updatedAt
                id
                name
                code
                enabled
            }
        }
    }
    ${ub}
`,db=(K.Ps`
    query GetZone($id: ID!) {
        zone(id: $id) {
            ...Zone
        }
    }
    ${ub}
`,K.Ps`
    mutation CreateZone($input: CreateZoneInput!) {
        createZone(input: $input) {
            ...Zone
        }
    }
    ${ub}
`),pb=K.Ps`
    mutation UpdateZone($input: UpdateZoneInput!) {
        updateZone(input: $input) {
            ...Zone
        }
    }
    ${ub}
`,fb=K.Ps`
    mutation DeleteZone($id: ID!) {
        deleteZone(id: $id) {
            message
            result
        }
    }
`,gb=K.Ps`
    mutation AddMembersToZone($zoneId: ID!, $memberIds: [ID!]!) {
        addMembersToZone(zoneId: $zoneId, memberIds: $memberIds) {
            ...Zone
        }
    }
    ${ub}
`,mb=K.Ps`
    mutation RemoveMembersFromZone($zoneId: ID!, $memberIds: [ID!]!) {
        removeMembersFromZone(zoneId: $zoneId, memberIds: $memberIds) {
            ...Zone
        }
    }
    ${ub}
`,vb=K.Ps`
    fragment TaxCategory on TaxCategory {
        id
        createdAt
        updatedAt
        name
        isDefault
    }
`,yb=K.Ps`
    query GetTaxCategories {
        taxCategories {
            ...TaxCategory
        }
    }
    ${vb}
`,bb=K.Ps`
    query GetTaxCategory($id: ID!) {
        taxCategory(id: $id) {
            ...TaxCategory
        }
    }
    ${vb}
`,Cb=K.Ps`
    mutation CreateTaxCategory($input: CreateTaxCategoryInput!) {
        createTaxCategory(input: $input) {
            ...TaxCategory
        }
    }
    ${vb}
`,_b=K.Ps`
    mutation UpdateTaxCategory($input: UpdateTaxCategoryInput!) {
        updateTaxCategory(input: $input) {
            ...TaxCategory
        }
    }
    ${vb}
`,wb=K.Ps`
    mutation DeleteTaxCategory($id: ID!) {
        deleteTaxCategory(id: $id) {
            result
            message
        }
    }
`,Sb=K.Ps`
    fragment TaxRate on TaxRate {
        id
        createdAt
        updatedAt
        name
        enabled
        value
        category {
            id
            name
        }
        zone {
            id
            name
        }
        customerGroup {
            id
            name
        }
    }
`,Ab=K.Ps`
    query GetTaxRateList($options: TaxRateListOptions) {
        taxRates(options: $options) {
            items {
                ...TaxRate
            }
            totalItems
        }
    }
    ${Sb}
`,xb=K.Ps`
    query GetTaxRateListSimple($options: TaxRateListOptions) {
        taxRates(options: $options) {
            items {
                id
                createdAt
                updatedAt
                name
                enabled
                value
                category {
                    id
                    name
                }
                zone {
                    id
                    name
                }
            }
            totalItems
        }
    }
`,Mb=K.Ps`
    query GetTaxRate($id: ID!) {
        taxRate(id: $id) {
            ...TaxRate
        }
    }
    ${Sb}
`,Ib=K.Ps`
    mutation CreateTaxRate($input: CreateTaxRateInput!) {
        createTaxRate(input: $input) {
            ...TaxRate
        }
    }
    ${Sb}
`,Lb=K.Ps`
    mutation UpdateTaxRate($input: UpdateTaxRateInput!) {
        updateTaxRate(input: $input) {
            ...TaxRate
        }
    }
    ${Sb}
`,kb=K.Ps`
    mutation DeleteTaxRate($id: ID!) {
        deleteTaxRate(id: $id) {
            result
            message
        }
    }
`,Ob=K.Ps`
    fragment Channel on Channel {
        id
        createdAt
        updatedAt
        code
        token
        pricesIncludeTax
        currencyCode
        defaultLanguageCode
        defaultShippingZone {
            id
            name
        }
        defaultTaxZone {
            id
            name
        }
    }
`,Vb=K.Ps`
    query GetChannels {
        channels {
            ...Channel
        }
    }
    ${Ob}
`,Eb=K.Ps`
    query GetChannel($id: ID!) {
        channel(id: $id) {
            ...Channel
        }
    }
    ${Ob}
`,Tb=K.Ps`
    query GetActiveChannel {
        activeChannel {
            ...Channel
        }
    }
    ${Ob}
`,Zb=K.Ps`
    mutation CreateChannel($input: CreateChannelInput!) {
        createChannel(input: $input) {
            ...Channel
            ...ErrorResult
        }
    }
    ${Ob}
    ${Ty}
`,Db=K.Ps`
    mutation UpdateChannel($input: UpdateChannelInput!) {
        updateChannel(input: $input) {
            ...Channel
            ...ErrorResult
        }
    }
    ${Ob}
    ${Ty}
`,Pb=K.Ps`
    mutation DeleteChannel($id: ID!) {
        deleteChannel(id: $id) {
            result
            message
        }
    }
`,Hb=K.Ps`
    fragment PaymentMethod on PaymentMethod {
        id
        createdAt
        updatedAt
        name
        code
        description
        enabled
        checker {
            ...ConfigurableOperation
        }
        handler {
            ...ConfigurableOperation
        }
    }
    ${Vy}
`,Fb=K.Ps`
    query GetPaymentMethodList($options: PaymentMethodListOptions!) {
        paymentMethods(options: $options) {
            items {
                ...PaymentMethod
            }
            totalItems
        }
    }
    ${Hb}
`,Rb=K.Ps`
    query GetPaymentMethodOperations {
        paymentMethodEligibilityCheckers {
            ...ConfigurableOperationDef
        }
        paymentMethodHandlers {
            ...ConfigurableOperationDef
        }
    }
    ${Ey}
`,Nb=K.Ps`
    query GetPaymentMethod($id: ID!) {
        paymentMethod(id: $id) {
            ...PaymentMethod
        }
    }
    ${Hb}
`,Bb=K.Ps`
    mutation CreatePaymentMethod($input: CreatePaymentMethodInput!) {
        createPaymentMethod(input: $input) {
            ...PaymentMethod
        }
    }
    ${Hb}
`,jb=K.Ps`
    mutation UpdatePaymentMethod($input: UpdatePaymentMethodInput!) {
        updatePaymentMethod(input: $input) {
            ...PaymentMethod
        }
    }
    ${Hb}
`,qb=K.Ps`
    mutation DeletePaymentMethod($id: ID!, $force: Boolean) {
        deletePaymentMethod(id: $id, force: $force) {
            result
            message
        }
    }
`,zb=K.Ps`
    fragment GlobalSettings on GlobalSettings {
        id
        availableLanguages
        trackInventory
        outOfStockThreshold
        serverConfig {
            permissions {
                name
                description
                assignable
            }
            orderProcess {
                name
            }
        }
    }
`,Gb=K.Ps`
    query GetGlobalSettings {
        globalSettings {
            ...GlobalSettings
        }
    }
    ${zb}
`,Yb=K.Ps`
    mutation UpdateGlobalSettings($input: UpdateGlobalSettingsInput!) {
        updateGlobalSettings(input: $input) {
            ...GlobalSettings
            ...ErrorResult
        }
    }
    ${zb}
    ${Ty}
`,$b=K.Ps`
    fragment CustomFieldConfig on CustomField {
        name
        type
        list
        description {
            languageCode
            value
        }
        label {
            languageCode
            value
        }
        readonly
        nullable
        ui
    }
`,Ub=K.Ps`
    fragment StringCustomField on StringCustomFieldConfig {
        ...CustomFieldConfig
        pattern
        options {
            label {
                languageCode
                value
            }
            value
        }
    }
    ${$b}
`,Jb=K.Ps`
    fragment LocaleStringCustomField on LocaleStringCustomFieldConfig {
        ...CustomFieldConfig
        pattern
    }
    ${$b}
`,Qb=K.Ps`
    fragment TextCustomField on TextCustomFieldConfig {
        ...CustomFieldConfig
    }
    ${$b}
`,Wb=K.Ps`
    fragment BooleanCustomField on BooleanCustomFieldConfig {
        ...CustomFieldConfig
    }
    ${$b}
`,Kb=K.Ps`
    fragment IntCustomField on IntCustomFieldConfig {
        ...CustomFieldConfig
        intMin: min
        intMax: max
        intStep: step
    }
    ${$b}
`,Xb=K.Ps`
    fragment FloatCustomField on FloatCustomFieldConfig {
        ...CustomFieldConfig
        floatMin: min
        floatMax: max
        floatStep: step
    }
    ${$b}
`,tC=K.Ps`
    fragment DateTimeCustomField on DateTimeCustomFieldConfig {
        ...CustomFieldConfig
        datetimeMin: min
        datetimeMax: max
        datetimeStep: step
    }
    ${$b}
`,eC=K.Ps`
    fragment RelationCustomField on RelationCustomFieldConfig {
        ...CustomFieldConfig
        entity
        scalarFields
    }
    ${$b}
`,nC=K.Ps`
    fragment CustomFields on CustomField {
        ... on StringCustomFieldConfig {
            ...StringCustomField
        }
        ... on LocaleStringCustomFieldConfig {
            ...LocaleStringCustomField
        }
        ... on TextCustomFieldConfig {
            ...TextCustomField
        }
        ... on BooleanCustomFieldConfig {
            ...BooleanCustomField
        }
        ... on IntCustomFieldConfig {
            ...IntCustomField
        }
        ... on FloatCustomFieldConfig {
            ...FloatCustomField
        }
        ... on DateTimeCustomFieldConfig {
            ...DateTimeCustomField
        }
        ... on RelationCustomFieldConfig {
            ...RelationCustomField
        }
    }
    ${Ub}
    ${Jb}
    ${Qb}
    ${Wb}
    ${Kb}
    ${Xb}
    ${tC}
    ${eC}
`,rC=K.Ps`
    query GetServerConfig {
        globalSettings {
            id
            serverConfig {
                orderProcess {
                    name
                    to
                }
                permittedAssetTypes
                permissions {
                    name
                    description
                    assignable
                }
                customFieldConfig {
                    Address {
                        ...CustomFields
                    }
                    Administrator {
                        ...CustomFields
                    }
                    Asset {
                        ...CustomFields
                    }
                    Channel {
                        ...CustomFields
                    }
                    Collection {
                        ...CustomFields
                    }
                    Country {
                        ...CustomFields
                    }
                    Customer {
                        ...CustomFields
                    }
                    CustomerGroup {
                        ...CustomFields
                    }
                    Facet {
                        ...CustomFields
                    }
                    FacetValue {
                        ...CustomFields
                    }
                    Fulfillment {
                        ...CustomFields
                    }
                    GlobalSettings {
                        ...CustomFields
                    }
                    Order {
                        ...CustomFields
                    }
                    OrderLine {
                        ...CustomFields
                    }
                    PaymentMethod {
                        ...CustomFields
                    }
                    Product {
                        ...CustomFields
                    }
                    ProductOption {
                        ...CustomFields
                    }
                    ProductOptionGroup {
                        ...CustomFields
                    }
                    ProductVariant {
                        ...CustomFields
                    }
                    Promotion {
                        ...CustomFields
                    }
                    ShippingMethod {
                        ...CustomFields
                    }
                    TaxCategory {
                        ...CustomFields
                    }
                    TaxRate {
                        ...CustomFields
                    }
                    User {
                        ...CustomFields
                    }
                    Zone {
                        ...CustomFields
                    }
                }
            }
        }
    }
    ${nC}
`,iC=K.Ps`
    fragment JobInfo on Job {
        id
        createdAt
        startedAt
        settledAt
        queueName
        state
        isSettled
        progress
        duration
        data
        result
        error
        retries
        attempts
    }
`,sC=K.Ps`
    query GetJobInfo($id: ID!) {
        job(jobId: $id) {
            ...JobInfo
        }
    }
    ${iC}
`,oC=K.Ps`
    query GetAllJobs($options: JobListOptions) {
        jobs(options: $options) {
            items {
                ...JobInfo
            }
            totalItems
        }
    }
    ${iC}
`,aC=K.Ps`
    query GetJobsById($ids: [ID!]!) {
        jobsById(jobIds: $ids) {
            ...JobInfo
        }
    }
    ${iC}
`,lC=K.Ps`
    query GetJobQueueList {
        jobQueues {
            name
            running
        }
    }
`,cC=K.Ps`
    mutation CancelJob($id: ID!) {
        cancelJob(jobId: $id) {
            ...JobInfo
        }
    }
    ${iC}
`,uC=K.Ps`
    mutation Reindex {
        reindex {
            ...JobInfo
        }
    }
    ${iC}
`,hC=K.Ps`
    query GetPendingSearchIndexUpdates {
        pendingSearchIndexUpdates
    }
`,dC=K.Ps`
    mutation RunPendingSearchIndexUpdates {
        runPendingSearchIndexUpdates {
            success
        }
    }
`;class pC{constructor(t){this.injector=t,this._serverConfig={}}get baseDataService(){return this.injector.get(MC)}init(){return()=>this.getServerConfig()}getServerConfig(){return this.baseDataService.query(rC).single$.toPromise().then(t=>{this._serverConfig=t.globalSettings.serverConfig},t=>{})}getAvailableLanguages(){return this.baseDataService.query(Gb,{},"cache-first").mapSingle(t=>t.globalSettings.availableLanguages)}refreshGlobalSettings(){return this.baseDataService.query(Gb,{},"network-only").single$}getCustomFieldsFor(t){return this.serverConfig.customFieldConfig[t]||[]}getOrderProcessStates(){return this.serverConfig.orderProcess}getPermittedAssetTypes(){return this.serverConfig.permittedAssetTypes}getPermissionDefinitions(){return this.serverConfig.permissions}get serverConfig(){return this._serverConfig}}function fC(t,e){const n=t.definitions.filter(gC);for(const r of n){let t=r.typeCondition.name.value;"OrderAddress"===t&&(t="Address");const n=e[t];if(n&&n.length){r.selectionSet.selections.push({name:{kind:ee.h.NAME,value:"customFields"},kind:ee.h.FIELD,selectionSet:{kind:ee.h.SELECTION_SET,selections:n.map(t=>Object.assign({kind:ee.h.FIELD,name:{kind:ee.h.NAME,value:t.name}},"relation"===t.type?{selectionSet:{kind:ee.h.SELECTION_SET,selections:t.scalarFields.map(t=>({kind:ee.h.FIELD,name:{kind:ee.h.NAME,value:t}}))}}:{}))}});const t=n.filter(t=>"localeString"===t.type),e=r.selectionSet.selections.filter(mC).find(t=>"translations"===t.name.value);t.length&&e&&e.selectionSet&&e.selectionSet.selections.push({name:{kind:ee.h.NAME,value:"customFields"},kind:ee.h.FIELD,selectionSet:{kind:ee.h.SELECTION_SET,selections:t.map(t=>({kind:ee.h.FIELD,name:{kind:ee.h.NAME,value:t.name}}))}})}}return t}function gC(t){return t.kind===ee.h.FRAGMENT_DEFINITION}function mC(t){return t.kind===ee.h.FIELD}pC.\u0275fac=function(t){return new(t||pC)(r.LFG(r.zs3))},pC.\u0275prov=r.Yz7({token:pC,factory:pC.\u0275fac}),pC.ctorParameters=()=>[{type:r.zs3}];const vC=/Create([A-Za-z]+)Input/,yC=/Update([A-Za-z]+)Input/;function bC(t){const e=function(t,e){for(var n=null,r=0,i=t.definitions;r<i.length;r++){var s,o=i[r];if(o.kind===ee.h.OPERATION_DEFINITION)if(null==e){if(n)return null;n=o}else if((null===(s=o.name)||void 0===s?void 0:s.value)===e)return o}return n}(t,null);if(e&&e.variableDefinitions)for(const n of e.variableDefinitions){const t=CC(n.type).name.value;if("UpdateActiveAdministratorInput"===t)return"Administrator";const e=t.match(vC);if(e)return e[1];const r=t.match(yC);if(r)return r[1]}}function CC(t){return"NonNullType"===t.kind||"ListType"===t.kind?CC(t.type):t}function _C(t,e){for(const n of e)if(n.readonly)if("localeString"===n.type){if(SC(t))for(const e of t.translations)wC(e)&&void 0!==e.customFields[n.name]&&delete e.customFields[n.name]}else wC(t)&&void 0!==t.customFields[n.name]&&delete t.customFields[n.name];return t}function wC(t){return null!=t&&t.hasOwnProperty("customFields")}function SC(t){return null!=t&&t.hasOwnProperty("translations")}function AC(t,e){for(const n of e)if("relation"===n.type&&xC(t)){const e=t.customFields[n.name];t.customFields.hasOwnProperty(n.name)&&(delete t.customFields[n.name],t.customFields[(0,zt.getGraphQlInputName)(n)]=n.list&&Array.isArray(e)?e.map(t=>null==t?void 0:t.id):null===e?null:null==e?void 0:e.id)}return t}function xC(t){return null!=t&&t.hasOwnProperty("customFields")&&"object"==typeof t.customFields}class MC{constructor(t,e,n,r){this.apollo=t,this.httpClient=e,this.localStorageService=n,this.serverConfigService=r}get customFields(){return this.serverConfigService.serverConfig.customFieldConfig||{}}query(t,e,n="cache-and-network"){const r=fC(t,this.customFields),i=this.apollo.watchQuery({query:r,variables:e,fetchPolicy:n});return new nb(i,this.apollo)}mutate(t,e,n){const r=fC(t,this.customFields),i=this.prepareCustomFields(t,e);return this.apollo.mutate({mutation:r,variables:i,update:n}).pipe((0,f.U)(t=>t.data))}prepareCustomFields(t,e){const n=bC(t);if(n){const t=this.customFields[n];if(e&&t){let n=(0,Nt.I)(e);return n=function(t,e){if(Array.isArray(t))for(const n of t)_C(n,e);else if(Array.isArray(t.input))for(const n of t.input)_C(n,e);else _C(t.input,e);return _C(t,e)}(n,t),n=function(t,e){if(t.input)if(Array.isArray(t.input))for(const n of t.input)AC(n,e);else AC(t.input,e);return AC(t,e)}(n,t),n}}return e}}MC.\u0275fac=function(t){return new(t||MC)(r.LFG($),r.LFG(_t),r.LFG(Ry),r.LFG(pC))},MC.\u0275prov=r.Yz7({token:MC,factory:MC.\u0275fac}),MC.ctorParameters=()=>[{type:$},{type:_t},{type:Ry},{type:pC}];class IC{constructor(t){this.baseDataService=t}startRequest(){return this.baseDataService.mutate(Ny)}completeRequest(){return this.baseDataService.mutate(By)}getNetworkStatus(){return this.baseDataService.query(Qy,{},"cache-first")}loginSuccess(t,e,n){return this.baseDataService.mutate(qy,{input:{username:t,loginTime:Date.now().toString(),activeChannelId:e,channels:n}})}logOut(){return this.baseDataService.mutate(zy)}userStatus(){return this.baseDataService.query(Wy,{},"cache-first")}uiState(){return this.baseDataService.query(Ky,{},"cache-first")}setUiLanguage(t,e){return this.baseDataService.mutate(Gy,{languageCode:t,locale:e})}setUiLocale(t){return this.baseDataService.mutate(Yy,{locale:t})}setContentLanguage(t){return this.baseDataService.mutate(Uy,{languageCode:t})}setUiTheme(t){return this.baseDataService.mutate(Jy,{theme:t})}setDisplayUiExtensionPoints(t){return this.baseDataService.mutate($y,{display:t})}setActiveChannel(t){return this.baseDataService.mutate(tb,{channelId:t})}updateUserChannels(t){return this.baseDataService.mutate(eb,{channels:t})}}const LC=K.Ps`
    fragment Asset on Asset {
        id
        createdAt
        updatedAt
        name
        fileSize
        mimeType
        type
        preview
        source
        width
        height
        focalPoint {
            x
            y
        }
    }
`,kC=K.Ps`
    fragment Tag on Tag {
        id
        value
    }
`,OC=K.Ps`
    fragment ProductOptionGroup on ProductOptionGroup {
        id
        createdAt
        updatedAt
        code
        languageCode
        name
        translations {
            id
            languageCode
            name
        }
    }
`,VC=K.Ps`
    fragment ProductOption on ProductOption {
        id
        createdAt
        updatedAt
        code
        languageCode
        name
        groupId
        translations {
            id
            languageCode
            name
        }
    }
`,EC=K.Ps`
    fragment ProductVariant on ProductVariant {
        id
        createdAt
        updatedAt
        enabled
        languageCode
        name
        price
        currencyCode
        priceWithTax
        stockOnHand
        stockAllocated
        trackInventory
        outOfStockThreshold
        useGlobalOutOfStockThreshold
        taxRateApplied {
            id
            name
            value
        }
        taxCategory {
            id
            name
        }
        sku
        options {
            ...ProductOption
        }
        facetValues {
            id
            code
            name
            facet {
                id
                name
            }
        }
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        translations {
            id
            languageCode
            name
        }
        channels {
            id
            code
        }
    }
    ${VC}
    ${LC}
`,TC=K.Ps`
    fragment ProductDetail on Product {
        id
        createdAt
        updatedAt
        enabled
        languageCode
        name
        slug
        description
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        translations {
            id
            languageCode
            name
            slug
            description
        }
        optionGroups {
            ...ProductOptionGroup
        }
        facetValues {
            id
            code
            name
            facet {
                id
                name
            }
        }
        channels {
            id
            code
        }
    }
    ${OC}
    ${LC}
`,ZC=K.Ps`
    fragment ProductOptionGroupWithOptions on ProductOptionGroup {
        id
        createdAt
        updatedAt
        languageCode
        code
        name
        translations {
            id
            name
        }
        options {
            id
            languageCode
            name
            code
            translations {
                name
            }
        }
    }
`,DC=K.Ps`
    mutation UpdateProduct($input: UpdateProductInput!, $variantListOptions: ProductVariantListOptions) {
        updateProduct(input: $input) {
            ...ProductDetail
            variantList(options: $variantListOptions) {
                items {
                    ...ProductVariant
                }
                totalItems
            }
        }
    }
    ${TC}
    ${EC}
`,PC=K.Ps`
    mutation CreateProduct($input: CreateProductInput!, $variantListOptions: ProductVariantListOptions) {
        createProduct(input: $input) {
            ...ProductDetail
            variantList(options: $variantListOptions) {
                items {
                    ...ProductVariant
                }
                totalItems
            }
        }
    }
    ${TC}
    ${EC}
`,HC=K.Ps`
    mutation DeleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            result
            message
        }
    }
`,FC=K.Ps`
    mutation CreateProductVariants($input: [CreateProductVariantInput!]!) {
        createProductVariants(input: $input) {
            ...ProductVariant
        }
    }
    ${EC}
`,RC=K.Ps`
    mutation UpdateProductVariants($input: [UpdateProductVariantInput!]!) {
        updateProductVariants(input: $input) {
            ...ProductVariant
        }
    }
    ${EC}
`,NC=K.Ps`
    mutation CreateProductOptionGroup($input: CreateProductOptionGroupInput!) {
        createProductOptionGroup(input: $input) {
            ...ProductOptionGroupWithOptions
        }
    }
    ${ZC}
`,BC=K.Ps`
    query GetProductOptionGroup($id: ID!) {
        productOptionGroup(id: $id) {
            ...ProductOptionGroupWithOptions
        }
    }
    ${ZC}
`,jC=K.Ps`
    mutation AddOptionToGroup($input: CreateProductOptionInput!) {
        createProductOption(input: $input) {
            id
            createdAt
            updatedAt
            name
            code
            groupId
        }
    }
`,qC=K.Ps`
    mutation AddOptionGroupToProduct($productId: ID!, $optionGroupId: ID!) {
        addOptionGroupToProduct(productId: $productId, optionGroupId: $optionGroupId) {
            id
            createdAt
            updatedAt
            optionGroups {
                id
                createdAt
                updatedAt
                code
                options {
                    id
                    createdAt
                    updatedAt
                    code
                }
            }
        }
    }
`,zC=K.Ps`
    mutation RemoveOptionGroupFromProduct($productId: ID!, $optionGroupId: ID!) {
        removeOptionGroupFromProduct(productId: $productId, optionGroupId: $optionGroupId) {
            ... on Product {
                id
                createdAt
                updatedAt
                optionGroups {
                    id
                    createdAt
                    updatedAt
                    code
                    options {
                        id
                        createdAt
                        updatedAt
                        code
                    }
                }
            }
            ...ErrorResult
        }
    }
    ${Ty}
`,GC=K.Ps`
    query GetProductWithVariants($id: ID!, $variantListOptions: ProductVariantListOptions) {
        product(id: $id) {
            ...ProductDetail
            variantList(options: $variantListOptions) {
                items {
                    ...ProductVariant
                }
                totalItems
            }
        }
    }
    ${TC}
    ${EC}
`,YC=K.Ps`
    query GetProductSimple($id: ID!) {
        product(id: $id) {
            id
            name
            featuredAsset {
                ...Asset
            }
        }
    }
    ${LC}
`,$C=K.Ps`
    query GetProductList($options: ProductListOptions) {
        products(options: $options) {
            items {
                id
                createdAt
                updatedAt
                enabled
                languageCode
                name
                slug
                featuredAsset {
                    id
                    createdAt
                    updatedAt
                    preview
                }
            }
            totalItems
        }
    }
`,UC=K.Ps`
    query GetProductOptionGroups($filterTerm: String) {
        productOptionGroups(filterTerm: $filterTerm) {
            id
            createdAt
            updatedAt
            languageCode
            code
            name
            options {
                id
                createdAt
                updatedAt
                languageCode
                code
                name
            }
        }
    }
`,JC=K.Ps`
    query GetAssetList($options: AssetListOptions) {
        assets(options: $options) {
            items {
                ...Asset
                tags {
                    ...Tag
                }
            }
            totalItems
        }
    }
    ${LC}
    ${kC}
`,QC=K.Ps`
    query GetAsset($id: ID!) {
        asset(id: $id) {
            ...Asset
            tags {
                ...Tag
            }
        }
    }
    ${LC}
    ${kC}
`,WC=K.Ps`
    mutation CreateAssets($input: [CreateAssetInput!]!) {
        createAssets(input: $input) {
            ...Asset
            ... on Asset {
                tags {
                    ...Tag
                }
            }
            ... on ErrorResult {
                message
            }
        }
    }
    ${LC}
    ${kC}
`,KC=K.Ps`
    mutation UpdateAsset($input: UpdateAssetInput!) {
        updateAsset(input: $input) {
            ...Asset
            tags {
                ...Tag
            }
        }
    }
    ${LC}
    ${kC}
`,XC=K.Ps`
    mutation DeleteAssets($input: DeleteAssetsInput!) {
        deleteAssets(input: $input) {
            result
            message
        }
    }
`,t_=K.Ps`
    query SearchProducts($input: SearchInput!) {
        search(input: $input) {
            totalItems
            items {
                enabled
                productId
                productName
                productAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                productVariantId
                productVariantName
                productVariantAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                sku
                channelIds
            }
            facetValues {
                count
                facetValue {
                    id
                    createdAt
                    updatedAt
                    name
                    facet {
                        id
                        createdAt
                        updatedAt
                        name
                    }
                }
            }
        }
    }
`,e_=K.Ps`
    query ProductSelectorSearch($term: String!, $take: Int!) {
        search(input: { groupByProduct: false, term: $term, take: $take }) {
            items {
                productVariantId
                productVariantName
                productAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                price {
                    ... on SinglePrice {
                        value
                    }
                }
                priceWithTax {
                    ... on SinglePrice {
                        value
                    }
                }
                sku
            }
        }
    }
`,n_=K.Ps`
    mutation UpdateProductOptionGroup($input: UpdateProductOptionGroupInput!) {
        updateProductOptionGroup(input: $input) {
            ...ProductOptionGroup
        }
    }
    ${OC}
`,r_=K.Ps`
    mutation UpdateProductOption($input: UpdateProductOptionInput!) {
        updateProductOption(input: $input) {
            ...ProductOption
        }
    }
    ${VC}
`,i_=K.Ps`
    mutation DeleteProductVariant($id: ID!) {
        deleteProductVariant(id: $id) {
            result
            message
        }
    }
`,s_=K.Ps`
    query GetProductVariantOptions($id: ID!) {
        product(id: $id) {
            id
            createdAt
            updatedAt
            name
            optionGroups {
                ...ProductOptionGroup
                options {
                    ...ProductOption
                }
            }
            variants {
                id
                createdAt
                updatedAt
                enabled
                name
                sku
                price
                stockOnHand
                enabled
                options {
                    id
                    createdAt
                    updatedAt
                    name
                    code
                    groupId
                }
            }
        }
    }
    ${OC}
    ${VC}
`,o_=K.Ps`
    mutation AssignProductsToChannel($input: AssignProductsToChannelInput!) {
        assignProductsToChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,a_=K.Ps`
    mutation AssignVariantsToChannel($input: AssignProductVariantsToChannelInput!) {
        assignProductVariantsToChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,l_=K.Ps`
    mutation RemoveProductsFromChannel($input: RemoveProductsFromChannelInput!) {
        removeProductsFromChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,c_=K.Ps`
    mutation RemoveVariantsFromChannel($input: RemoveProductVariantsFromChannelInput!) {
        removeProductVariantsFromChannel(input: $input) {
            id
            channels {
                id
                code
            }
        }
    }
`,u_=K.Ps`
    query GetProductVariant($id: ID!) {
        productVariant(id: $id) {
            id
            name
            sku
            featuredAsset {
                id
                preview
                focalPoint {
                    x
                    y
                }
            }
            product {
                id
                featuredAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
            }
        }
    }
`,h_=K.Ps`
    query GetProductVariantListSimple($options: ProductVariantListOptions!, $productId: ID) {
        productVariants(options: $options, productId: $productId) {
            items {
                id
                name
                sku
                featuredAsset {
                    id
                    preview
                    focalPoint {
                        x
                        y
                    }
                }
                product {
                    id
                    featuredAsset {
                        id
                        preview
                        focalPoint {
                            x
                            y
                        }
                    }
                }
            }
            totalItems
        }
    }
`,d_=K.Ps`
    query GetProductVariantList($options: ProductVariantListOptions!, $productId: ID) {
        productVariants(options: $options, productId: $productId) {
            items {
                ...ProductVariant
            }
            totalItems
        }
    }
    ${EC}
`,p_=K.Ps`
    query GetTagList($options: TagListOptions) {
        tags(options: $options) {
            items {
                ...Tag
            }
            totalItems
        }
    }
    ${kC}
`,f_=K.Ps`
    query GetTag($id: ID!) {
        tag(id: $id) {
            ...Tag
        }
    }
    ${kC}
`,g_=K.Ps`
    mutation CreateTag($input: CreateTagInput!) {
        createTag(input: $input) {
            ...Tag
        }
    }
    ${kC}
`,m_=K.Ps`
    mutation UpdateTag($input: UpdateTagInput!) {
        updateTag(input: $input) {
            ...Tag
        }
    }
    ${kC}
`,v_=K.Ps`
    mutation DeleteTag($id: ID!) {
        deleteTag(id: $id) {
            message
            result
        }
    }
`,y_=K.Ps`
    query GetCollectionFilters {
        collectionFilters {
            ...ConfigurableOperationDef
        }
    }
    ${Ey}
`,b_=K.Ps`
    fragment Collection on Collection {
        id
        createdAt
        updatedAt
        name
        slug
        description
        isPrivate
        languageCode
        featuredAsset {
            ...Asset
        }
        assets {
            ...Asset
        }
        filters {
            ...ConfigurableOperation
        }
        translations {
            id
            languageCode
            name
            slug
            description
        }
        parent {
            id
            name
        }
        children {
            id
            name
        }
    }
    ${LC}
    ${Vy}
`,C_=K.Ps`
    query GetCollectionList($options: CollectionListOptions) {
        collections(options: $options) {
            items {
                id
                name
                slug
                description
                isPrivate
                featuredAsset {
                    ...Asset
                }
                parent {
                    id
                }
            }
            totalItems
        }
    }
    ${LC}
`,__=K.Ps`
    query GetCollection($id: ID!) {
        collection(id: $id) {
            ...Collection
        }
    }
    ${b_}
`,w_=K.Ps`
    mutation CreateCollection($input: CreateCollectionInput!) {
        createCollection(input: $input) {
            ...Collection
        }
    }
    ${b_}
`,S_=K.Ps`
    mutation UpdateCollection($input: UpdateCollectionInput!) {
        updateCollection(input: $input) {
            ...Collection
        }
    }
    ${b_}
`,A_=K.Ps`
    mutation MoveCollection($input: MoveCollectionInput!) {
        moveCollection(input: $input) {
            ...Collection
        }
    }
    ${b_}
`,x_=K.Ps`
    mutation DeleteCollection($id: ID!) {
        deleteCollection(id: $id) {
            result
            message
        }
    }
`,M_=K.Ps`
    query GetCollectionContents($id: ID!, $options: ProductVariantListOptions) {
        collection(id: $id) {
            id
            name
            productVariants(options: $options) {
                items {
                    id
                    productId
                    name
                    sku
                }
                totalItems
            }
        }
    }
`,I_=K.Ps`
    query PreviewCollectionContents(
        $input: PreviewCollectionVariantsInput!
        $options: ProductVariantListOptions
    ) {
        previewCollectionVariants(input: $input, options: $options) {
            items {
                id
                productId
                name
                sku
            }
            totalItems
        }
    }
`;class L_{constructor(t){this.baseDataService=t}getCollectionFilters(){return this.baseDataService.query(y_)}getCollections(t=10,e=0){return this.baseDataService.query(C_,{options:{take:t,skip:e}})}getCollection(t){return this.baseDataService.query(__,{id:t})}createCollection(t){return this.baseDataService.mutate(w_,{input:(0,re.e)(t,["translations","parentId","assetIds","featuredAssetId","filters","customFields"])})}updateCollection(t){return this.baseDataService.mutate(S_,{input:(0,re.e)(t,["id","isPrivate","translations","assetIds","featuredAssetId","filters","customFields"])})}moveCollection(t){return(0,P.D)(t).pipe((0,w.b)(t=>this.baseDataService.mutate(A_,{input:t})),function(t,e=null){return function(n){return n.lift(new o(t,e))}}(t.length))}deleteCollection(t){return this.baseDataService.mutate(x_,{id:t})}previewCollectionVariants(t,e){return this.baseDataService.query(I_,{input:t,options:e})}getCollectionContents(t,e=10,n=0,r){const i=r?{name:{contains:r}}:void 0;return this.baseDataService.query(M_,{id:t,options:{skip:n,take:e,filter:i}})}}const k_=K.Ps`
    fragment Address on Address {
        id
        createdAt
        updatedAt
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country {
            id
            code
            name
        }
        phoneNumber
        defaultShippingAddress
        defaultBillingAddress
    }
`,O_=K.Ps`
    fragment Customer on Customer {
        id
        createdAt
        updatedAt
        title
        firstName
        lastName
        phoneNumber
        emailAddress
        user {
            id
            identifier
            verified
            lastLogin
        }
        addresses {
            ...Address
        }
    }
    ${k_}
`,V_=K.Ps`
    fragment CustomerGroup on CustomerGroup {
        id
        createdAt
        updatedAt
        name
    }
`,E_=K.Ps`
    query GetCustomerList($options: CustomerListOptions) {
        customers(options: $options) {
            items {
                id
                createdAt
                updatedAt
                title
                firstName
                lastName
                emailAddress
                user {
                    id
                    verified
                }
            }
            totalItems
        }
    }
`,T_=K.Ps`
    query GetCustomer($id: ID!, $orderListOptions: OrderListOptions) {
        customer(id: $id) {
            ...Customer
            groups {
                id
                name
            }
            orders(options: $orderListOptions) {
                items {
                    id
                    code
                    state
                    totalWithTax
                    currencyCode
                    updatedAt
                }
                totalItems
            }
        }
    }
    ${O_}
`,Z_=K.Ps`
    mutation CreateCustomer($input: CreateCustomerInput!, $password: String) {
        createCustomer(input: $input, password: $password) {
            ...Customer
            ...ErrorResult
        }
    }
    ${O_}
    ${Ty}
`,D_=K.Ps`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
            ...Customer
            ...ErrorResult
        }
    }
    ${O_}
    ${Ty}
`,P_=K.Ps`
    mutation DeleteCustomer($id: ID!) {
        deleteCustomer(id: $id) {
            result
            message
        }
    }
`,H_=K.Ps`
    mutation CreateCustomerAddress($customerId: ID!, $input: CreateAddressInput!) {
        createCustomerAddress(customerId: $customerId, input: $input) {
            ...Address
        }
    }
    ${k_}
`,F_=K.Ps`
    mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
        updateCustomerAddress(input: $input) {
            ...Address
        }
    }
    ${k_}
`,R_=K.Ps`
    mutation DeleteCustomerAddress($id: ID!) {
        deleteCustomerAddress(id: $id) {
            success
        }
    }
`,N_=K.Ps`
    mutation CreateCustomerGroup($input: CreateCustomerGroupInput!) {
        createCustomerGroup(input: $input) {
            ...CustomerGroup
        }
    }
    ${V_}
`,B_=K.Ps`
    mutation UpdateCustomerGroup($input: UpdateCustomerGroupInput!) {
        updateCustomerGroup(input: $input) {
            ...CustomerGroup
        }
    }
    ${V_}
`,j_=K.Ps`
    mutation DeleteCustomerGroup($id: ID!) {
        deleteCustomerGroup(id: $id) {
            result
            message
        }
    }
`,q_=K.Ps`
    query GetCustomerGroups($options: CustomerGroupListOptions) {
        customerGroups(options: $options) {
            items {
                ...CustomerGroup
            }
            totalItems
        }
    }
    ${V_}
`,z_=K.Ps`
    query GetCustomerGroupWithCustomers($id: ID!, $options: CustomerListOptions) {
        customerGroup(id: $id) {
            ...CustomerGroup
            customers(options: $options) {
                items {
                    id
                    createdAt
                    updatedAt
                    emailAddress
                    firstName
                    lastName
                }
                totalItems
            }
        }
    }
    ${V_}
`,G_=K.Ps`
    mutation AddCustomersToGroup($groupId: ID!, $customerIds: [ID!]!) {
        addCustomersToGroup(customerGroupId: $groupId, customerIds: $customerIds) {
            ...CustomerGroup
        }
    }
    ${V_}
`,Y_=K.Ps`
    mutation RemoveCustomersFromGroup($groupId: ID!, $customerIds: [ID!]!) {
        removeCustomersFromGroup(customerGroupId: $groupId, customerIds: $customerIds) {
            ...CustomerGroup
        }
    }
    ${V_}
`,$_=K.Ps`
    query GetCustomerHistory($id: ID!, $options: HistoryEntryListOptions) {
        customer(id: $id) {
            id
            history(options: $options) {
                totalItems
                items {
                    id
                    type
                    createdAt
                    isPublic
                    administrator {
                        id
                        firstName
                        lastName
                    }
                    data
                }
            }
        }
    }
`,U_=K.Ps`
    mutation AddNoteToCustomer($input: AddNoteToCustomerInput!) {
        addNoteToCustomer(input: $input) {
            id
        }
    }
`,J_=K.Ps`
    mutation UpdateCustomerNote($input: UpdateCustomerNoteInput!) {
        updateCustomerNote(input: $input) {
            id
            data
            isPublic
        }
    }
`,Q_=K.Ps`
    mutation DeleteCustomerNote($id: ID!) {
        deleteCustomerNote(id: $id) {
            result
            message
        }
    }
`;class W_{constructor(t){this.baseDataService=t}getCustomerList(t=10,e=0,n){const r=n?{filter:{emailAddress:{contains:n}}}:{};return this.baseDataService.query(E_,{options:Object.assign({take:t,skip:e},r)})}getCustomer(t,e){return this.baseDataService.query(T_,{id:t,orderListOptions:e})}createCustomer(t,e){return this.baseDataService.mutate(Z_,{input:t,password:e})}updateCustomer(t){return this.baseDataService.mutate(D_,{input:t})}deleteCustomer(t){return this.baseDataService.mutate(P_,{id:t})}createCustomerAddress(t,e){return this.baseDataService.mutate(H_,{customerId:t,input:e})}updateCustomerAddress(t){return this.baseDataService.mutate(F_,{input:t})}deleteCustomerAddress(t){return this.baseDataService.mutate(R_,{id:t})}createCustomerGroup(t){return this.baseDataService.mutate(N_,{input:t})}updateCustomerGroup(t){return this.baseDataService.mutate(B_,{input:t})}deleteCustomerGroup(t){return this.baseDataService.mutate(j_,{id:t})}getCustomerGroupList(t){return this.baseDataService.query(q_,{options:t})}getCustomerGroupWithCustomers(t,e){return this.baseDataService.query(z_,{id:t,options:e})}addCustomersToGroup(t,e){return this.baseDataService.mutate(G_,{groupId:t,customerIds:e})}removeCustomersFromGroup(t,e){return this.baseDataService.mutate(Y_,{groupId:t,customerIds:e})}getCustomerHistory(t,e){return this.baseDataService.query($_,{id:t,options:e})}addNoteToCustomer(t,e){return this.baseDataService.mutate(U_,{input:{note:e,isPublic:!1,id:t}})}updateCustomerNote(t){return this.baseDataService.mutate(J_,{input:t})}deleteCustomerNote(t){return this.baseDataService.mutate(Q_,{id:t})}}const K_=K.Ps`
    fragment FacetValue on FacetValue {
        id
        createdAt
        updatedAt
        languageCode
        code
        name
        translations {
            id
            languageCode
            name
        }
        facet {
            id
            createdAt
            updatedAt
            name
        }
    }
`,X_=K.Ps`
    fragment FacetWithValues on Facet {
        id
        createdAt
        updatedAt
        languageCode
        isPrivate
        code
        name
        translations {
            id
            languageCode
            name
        }
        values {
            ...FacetValue
        }
    }
    ${K_}
`,tw=K.Ps`
    mutation CreateFacet($input: CreateFacetInput!) {
        createFacet(input: $input) {
            ...FacetWithValues
        }
    }
    ${X_}
`,ew=K.Ps`
    mutation UpdateFacet($input: UpdateFacetInput!) {
        updateFacet(input: $input) {
            ...FacetWithValues
        }
    }
    ${X_}
`,nw=K.Ps`
    mutation DeleteFacet($id: ID!, $force: Boolean) {
        deleteFacet(id: $id, force: $force) {
            result
            message
        }
    }
`,rw=K.Ps`
    mutation CreateFacetValues($input: [CreateFacetValueInput!]!) {
        createFacetValues(input: $input) {
            ...FacetValue
        }
    }
    ${K_}
`,iw=K.Ps`
    mutation UpdateFacetValues($input: [UpdateFacetValueInput!]!) {
        updateFacetValues(input: $input) {
            ...FacetValue
        }
    }
    ${K_}
`,sw=K.Ps`
    mutation DeleteFacetValues($ids: [ID!]!, $force: Boolean) {
        deleteFacetValues(ids: $ids, force: $force) {
            result
            message
        }
    }
`,ow=K.Ps`
    query GetFacetList($options: FacetListOptions) {
        facets(options: $options) {
            items {
                ...FacetWithValues
            }
            totalItems
        }
    }
    ${X_}
`,aw=K.Ps`
    query GetFacetWithValues($id: ID!) {
        facet(id: $id) {
            ...FacetWithValues
        }
    }
    ${X_}
`;class lw{constructor(t){this.baseDataService=t}getFacets(t=10,e=0){return this.baseDataService.query(ow,{options:{take:t,skip:e}})}getAllFacets(){return this.baseDataService.query(ow,{})}getFacet(t){return this.baseDataService.query(aw,{id:t})}createFacet(t){const e={input:(0,re.e)(t,["code","isPrivate","translations","values","customFields"])};return this.baseDataService.mutate(tw,e)}updateFacet(t){const e={input:(0,re.e)(t,["id","code","isPrivate","translations","customFields"])};return this.baseDataService.mutate(ew,e)}deleteFacet(t,e){return this.baseDataService.mutate(nw,{id:t,force:e})}createFacetValues(t){const e={input:t.map((0,re.e)(["facetId","code","translations","customFields"]))};return this.baseDataService.mutate(rw,e)}updateFacetValues(t){const e={input:t.map((0,re.e)(["id","code","translations","customFields"]))};return this.baseDataService.mutate(iw,e)}deleteFacetValues(t,e){return this.baseDataService.mutate(sw,{ids:t,force:e})}}const cw=K.Ps`
    fragment Discount on Discount {
        adjustmentSource
        amount
        amountWithTax
        description
        type
    }
`,uw=K.Ps`
    fragment Refund on Refund {
        id
        state
        items
        shipping
        adjustment
        transactionId
        paymentId
    }
`,hw=K.Ps`
    fragment OrderAddress on OrderAddress {
        fullName
        company
        streetLine1
        streetLine2
        city
        province
        postalCode
        country
        countryCode
        phoneNumber
    }
`,dw=K.Ps`
    fragment Order on Order {
        id
        createdAt
        updatedAt
        orderPlacedAt
        code
        state
        nextStates
        total
        totalWithTax
        currencyCode
        customer {
            id
            firstName
            lastName
        }
        shippingLines {
            shippingMethod {
                name
            }
        }
    }
`,pw=K.Ps`
    fragment Fulfillment on Fulfillment {
        id
        state
        nextStates
        createdAt
        updatedAt
        method
        orderItems {
            id
        }
        trackingCode
    }
`,fw=K.Ps`
    fragment OrderLine on OrderLine {
        id
        featuredAsset {
            preview
        }
        productVariant {
            id
            name
            sku
            trackInventory
            stockOnHand
        }
        discounts {
            ...Discount
        }
        unitPrice
        unitPriceWithTax
        proratedUnitPrice
        proratedUnitPriceWithTax
        quantity
        items {
            id
            unitPrice
            unitPriceWithTax
            taxRate
            refundId
            cancelled
            fulfillment {
                ...Fulfillment
            }
        }
        linePrice
        lineTax
        linePriceWithTax
        discountedLinePrice
        discountedLinePriceWithTax
    }
`,gw=K.Ps`
    fragment OrderDetail on Order {
        id
        createdAt
        updatedAt
        code
        state
        nextStates
        active
        couponCodes
        customer {
            id
            firstName
            lastName
        }
        lines {
            ...OrderLine
        }
        surcharges {
            id
            sku
            description
            price
            priceWithTax
            taxRate
        }
        discounts {
            ...Discount
        }
        promotions {
            id
            couponCode
        }
        subTotal
        subTotalWithTax
        total
        totalWithTax
        currencyCode
        shipping
        shippingWithTax
        shippingLines {
            shippingMethod {
                id
                code
                name
                fulfillmentHandlerCode
                description
            }
        }
        taxSummary {
            description
            taxBase
            taxRate
            taxTotal
        }
        shippingAddress {
            ...OrderAddress
        }
        billingAddress {
            ...OrderAddress
        }
        payments {
            id
            createdAt
            transactionId
            amount
            method
            state
            nextStates
            errorMessage
            metadata
            refunds {
                id
                createdAt
                state
                items
                adjustment
                total
                paymentId
                reason
                transactionId
                method
                metadata
                orderItems {
                    id
                }
            }
        }
        fulfillments {
            ...Fulfillment
        }
        modifications {
            id
            createdAt
            isSettled
            priceChange
            note
            payment {
                id
                amount
            }
            orderItems {
                id
            }
            refund {
                id
                paymentId
                total
            }
            surcharges {
                id
            }
        }
    }
    ${cw}
    ${hw}
    ${pw}
    ${fw}
`,mw=K.Ps`
    query GetOrderList($options: OrderListOptions) {
        orders(options: $options) {
            items {
                ...Order
            }
            totalItems
        }
    }
    ${dw}
`,vw=K.Ps`
    query GetOrder($id: ID!) {
        order(id: $id) {
            ...OrderDetail
        }
    }
    ${gw}
`,yw=K.Ps`
    mutation SettlePayment($id: ID!) {
        settlePayment(id: $id) {
            ... on Payment {
                id
                transactionId
                amount
                method
                state
                metadata
            }
            ...ErrorResult
            ... on SettlePaymentError {
                paymentErrorMessage
            }
            ... on PaymentStateTransitionError {
                transitionError
            }
            ... on OrderStateTransitionError {
                transitionError
            }
        }
    }
    ${Ty}
`,bw=K.Ps`
    mutation TransitionPaymentToState($id: ID!, $state: String!) {
        transitionPaymentToState(id: $id, state: $state) {
            ... on Payment {
                id
                transactionId
                amount
                method
                state
                metadata
            }
            ...ErrorResult
            ... on PaymentStateTransitionError {
                transitionError
            }
        }
    }
    ${Ty}
`,Cw=K.Ps`
    mutation CreateFulfillment($input: FulfillOrderInput!) {
        addFulfillmentToOrder(input: $input) {
            ...Fulfillment
            ... on CreateFulfillmentError {
                errorCode
                message
                fulfillmentHandlerError
            }
            ... on FulfillmentStateTransitionError {
                errorCode
                message
                transitionError
            }
            ...ErrorResult
        }
    }
    ${pw}
    ${Ty}
`,_w=K.Ps`
    mutation CancelOrder($input: CancelOrderInput!) {
        cancelOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${gw}
    ${Ty}
`,ww=K.Ps`
    mutation RefundOrder($input: RefundOrderInput!) {
        refundOrder(input: $input) {
            ...Refund
            ...ErrorResult
        }
    }
    ${uw}
    ${Ty}
`,Sw=K.Ps`
    mutation SettleRefund($input: SettleRefundInput!) {
        settleRefund(input: $input) {
            ...Refund
            ...ErrorResult
        }
    }
    ${uw}
    ${Ty}
`,Aw=K.Ps`
    query GetOrderHistory($id: ID!, $options: HistoryEntryListOptions) {
        order(id: $id) {
            id
            history(options: $options) {
                totalItems
                items {
                    id
                    type
                    createdAt
                    isPublic
                    administrator {
                        id
                        firstName
                        lastName
                    }
                    data
                }
            }
        }
    }
`,xw=K.Ps`
    mutation AddNoteToOrder($input: AddNoteToOrderInput!) {
        addNoteToOrder(input: $input) {
            id
        }
    }
`,Mw=K.Ps`
    mutation UpdateOrderNote($input: UpdateOrderNoteInput!) {
        updateOrderNote(input: $input) {
            id
            data
            isPublic
        }
    }
`,Iw=K.Ps`
    mutation DeleteOrderNote($id: ID!) {
        deleteOrderNote(id: $id) {
            result
            message
        }
    }
`,Lw=K.Ps`
    mutation TransitionOrderToState($id: ID!, $state: String!) {
        transitionOrderToState(id: $id, state: $state) {
            ...Order
            ...ErrorResult
            ... on OrderStateTransitionError {
                transitionError
            }
        }
    }
    ${dw}
    ${Ty}
`,kw=K.Ps`
    mutation UpdateOrderCustomFields($input: UpdateOrderInput!) {
        setOrderCustomFields(input: $input) {
            ...Order
        }
    }
    ${dw}
`,Ow=K.Ps`
    mutation TransitionFulfillmentToState($id: ID!, $state: String!) {
        transitionFulfillmentToState(id: $id, state: $state) {
            ...Fulfillment
            ...ErrorResult
            ... on FulfillmentStateTransitionError {
                transitionError
            }
        }
    }
    ${pw}
    ${Ty}
`,Vw=K.Ps`
    query GetOrderSummary($start: DateTime!, $end: DateTime!) {
        orders(options: { filter: { orderPlacedAt: { between: { start: $start, end: $end } } } }) {
            totalItems
            items {
                id
                total
                currencyCode
            }
        }
    }
`,Ew=K.Ps`
    mutation ModifyOrder($input: ModifyOrderInput!) {
        modifyOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${gw}
    ${Ty}
`,Tw=K.Ps`
    mutation AddManualPayment($input: ManualPaymentInput!) {
        addManualPaymentToOrder(input: $input) {
            ...OrderDetail
            ...ErrorResult
        }
    }
    ${gw}
    ${Ty}
`;class Zw{constructor(t){this.baseDataService=t}getOrders(t={take:10}){return this.baseDataService.query(mw,{options:t})}getOrder(t){return this.baseDataService.query(vw,{id:t})}getOrderHistory(t,e){return this.baseDataService.query(Aw,{id:t,options:e})}settlePayment(t){return this.baseDataService.mutate(yw,{id:t})}transitionPaymentToState(t,e){return this.baseDataService.mutate(bw,{id:t,state:e})}createFulfillment(t){return this.baseDataService.mutate(Cw,{input:t})}transitionFulfillmentToState(t,e){return this.baseDataService.mutate(Ow,{id:t,state:e})}cancelOrder(t){return this.baseDataService.mutate(_w,{input:t})}refundOrder(t){return this.baseDataService.mutate(ww,{input:t})}settleRefund(t,e){return this.baseDataService.mutate(Sw,{input:t})}addNoteToOrder(t){return this.baseDataService.mutate(xw,{input:t})}updateOrderNote(t){return this.baseDataService.mutate(Mw,{input:t})}deleteOrderNote(t){return this.baseDataService.mutate(Iw,{id:t})}transitionToState(t,e){return this.baseDataService.mutate(Lw,{id:t,state:e})}updateOrderCustomFields(t){return this.baseDataService.mutate(kw,{input:t})}getOrderSummary(t,e){return this.baseDataService.query(Vw,{start:t.toISOString(),end:e.toISOString()})}modifyOrder(t){return this.baseDataService.mutate(Ew,{input:t})}addManualPaymentToOrder(t){return this.baseDataService.mutate(Tw,{input:t})}}var Dw,Pw,Hw,Fw,Rw,Nw,Bw,jw,qw,zw,Gw,Yw,$w;!function(t){t.PROMOTION="PROMOTION",t.DISTRIBUTED_ORDER_PROMOTION="DISTRIBUTED_ORDER_PROMOTION",t.OTHER="OTHER"}(Dw||(Dw={})),function(t){t.IMAGE="IMAGE",t.VIDEO="VIDEO",t.BINARY="BINARY"}(Pw||(Pw={})),function(t){t.AED="AED",t.AFN="AFN",t.ALL="ALL",t.AMD="AMD",t.ANG="ANG",t.AOA="AOA",t.ARS="ARS",t.AUD="AUD",t.AWG="AWG",t.AZN="AZN",t.BAM="BAM",t.BBD="BBD",t.BDT="BDT",t.BGN="BGN",t.BHD="BHD",t.BIF="BIF",t.BMD="BMD",t.BND="BND",t.BOB="BOB",t.BRL="BRL",t.BSD="BSD",t.BTN="BTN",t.BWP="BWP",t.BYN="BYN",t.BZD="BZD",t.CAD="CAD",t.CDF="CDF",t.CHF="CHF",t.CLP="CLP",t.CNY="CNY",t.COP="COP",t.CRC="CRC",t.CUC="CUC",t.CUP="CUP",t.CVE="CVE",t.CZK="CZK",t.DJF="DJF",t.DKK="DKK",t.DOP="DOP",t.DZD="DZD",t.EGP="EGP",t.ERN="ERN",t.ETB="ETB",t.EUR="EUR",t.FJD="FJD",t.FKP="FKP",t.GBP="GBP",t.GEL="GEL",t.GHS="GHS",t.GIP="GIP",t.GMD="GMD",t.GNF="GNF",t.GTQ="GTQ",t.GYD="GYD",t.HKD="HKD",t.HNL="HNL",t.HRK="HRK",t.HTG="HTG",t.HUF="HUF",t.IDR="IDR",t.ILS="ILS",t.INR="INR",t.IQD="IQD",t.IRR="IRR",t.ISK="ISK",t.JMD="JMD",t.JOD="JOD",t.JPY="JPY",t.KES="KES",t.KGS="KGS",t.KHR="KHR",t.KMF="KMF",t.KPW="KPW",t.KRW="KRW",t.KWD="KWD",t.KYD="KYD",t.KZT="KZT",t.LAK="LAK",t.LBP="LBP",t.LKR="LKR",t.LRD="LRD",t.LSL="LSL",t.LYD="LYD",t.MAD="MAD",t.MDL="MDL",t.MGA="MGA",t.MKD="MKD",t.MMK="MMK",t.MNT="MNT",t.MOP="MOP",t.MRU="MRU",t.MUR="MUR",t.MVR="MVR",t.MWK="MWK",t.MXN="MXN",t.MYR="MYR",t.MZN="MZN",t.NAD="NAD",t.NGN="NGN",t.NIO="NIO",t.NOK="NOK",t.NPR="NPR",t.NZD="NZD",t.OMR="OMR",t.PAB="PAB",t.PEN="PEN",t.PGK="PGK",t.PHP="PHP",t.PKR="PKR",t.PLN="PLN",t.PYG="PYG",t.QAR="QAR",t.RON="RON",t.RSD="RSD",t.RUB="RUB",t.RWF="RWF",t.SAR="SAR",t.SBD="SBD",t.SCR="SCR",t.SDG="SDG",t.SEK="SEK",t.SGD="SGD",t.SHP="SHP",t.SLL="SLL",t.SOS="SOS",t.SRD="SRD",t.SSP="SSP",t.STN="STN",t.SVC="SVC",t.SYP="SYP",t.SZL="SZL",t.THB="THB",t.TJS="TJS",t.TMT="TMT",t.TND="TND",t.TOP="TOP",t.TRY="TRY",t.TTD="TTD",t.TWD="TWD",t.TZS="TZS",t.UAH="UAH",t.UGX="UGX",t.USD="USD",t.UYU="UYU",t.UZS="UZS",t.VES="VES",t.VND="VND",t.VUV="VUV",t.WST="WST",t.XAF="XAF",t.XCD="XCD",t.XOF="XOF",t.XPF="XPF",t.YER="YER",t.ZAR="ZAR",t.ZMW="ZMW",t.ZWL="ZWL"}(Hw||(Hw={})),function(t){t.DELETED="DELETED",t.NOT_DELETED="NOT_DELETED"}(Fw||(Fw={})),function(t){t.UNKNOWN_ERROR="UNKNOWN_ERROR",t.MIME_TYPE_ERROR="MIME_TYPE_ERROR",t.LANGUAGE_NOT_AVAILABLE_ERROR="LANGUAGE_NOT_AVAILABLE_ERROR",t.CHANNEL_DEFAULT_LANGUAGE_ERROR="CHANNEL_DEFAULT_LANGUAGE_ERROR",t.SETTLE_PAYMENT_ERROR="SETTLE_PAYMENT_ERROR",t.EMPTY_ORDER_LINE_SELECTION_ERROR="EMPTY_ORDER_LINE_SELECTION_ERROR",t.ITEMS_ALREADY_FULFILLED_ERROR="ITEMS_ALREADY_FULFILLED_ERROR",t.INVALID_FULFILLMENT_HANDLER_ERROR="INVALID_FULFILLMENT_HANDLER_ERROR",t.CREATE_FULFILLMENT_ERROR="CREATE_FULFILLMENT_ERROR",t.INSUFFICIENT_STOCK_ON_HAND_ERROR="INSUFFICIENT_STOCK_ON_HAND_ERROR",t.MULTIPLE_ORDER_ERROR="MULTIPLE_ORDER_ERROR",t.CANCEL_ACTIVE_ORDER_ERROR="CANCEL_ACTIVE_ORDER_ERROR",t.PAYMENT_ORDER_MISMATCH_ERROR="PAYMENT_ORDER_MISMATCH_ERROR",t.REFUND_ORDER_STATE_ERROR="REFUND_ORDER_STATE_ERROR",t.NOTHING_TO_REFUND_ERROR="NOTHING_TO_REFUND_ERROR",t.ALREADY_REFUNDED_ERROR="ALREADY_REFUNDED_ERROR",t.QUANTITY_TOO_GREAT_ERROR="QUANTITY_TOO_GREAT_ERROR",t.REFUND_STATE_TRANSITION_ERROR="REFUND_STATE_TRANSITION_ERROR",t.PAYMENT_STATE_TRANSITION_ERROR="PAYMENT_STATE_TRANSITION_ERROR",t.FULFILLMENT_STATE_TRANSITION_ERROR="FULFILLMENT_STATE_TRANSITION_ERROR",t.ORDER_MODIFICATION_STATE_ERROR="ORDER_MODIFICATION_STATE_ERROR",t.NO_CHANGES_SPECIFIED_ERROR="NO_CHANGES_SPECIFIED_ERROR",t.PAYMENT_METHOD_MISSING_ERROR="PAYMENT_METHOD_MISSING_ERROR",t.REFUND_PAYMENT_ID_MISSING_ERROR="REFUND_PAYMENT_ID_MISSING_ERROR",t.MANUAL_PAYMENT_STATE_ERROR="MANUAL_PAYMENT_STATE_ERROR",t.PRODUCT_OPTION_IN_USE_ERROR="PRODUCT_OPTION_IN_USE_ERROR",t.MISSING_CONDITIONS_ERROR="MISSING_CONDITIONS_ERROR",t.NATIVE_AUTH_STRATEGY_ERROR="NATIVE_AUTH_STRATEGY_ERROR",t.INVALID_CREDENTIALS_ERROR="INVALID_CREDENTIALS_ERROR",t.ORDER_STATE_TRANSITION_ERROR="ORDER_STATE_TRANSITION_ERROR",t.EMAIL_ADDRESS_CONFLICT_ERROR="EMAIL_ADDRESS_CONFLICT_ERROR",t.ORDER_LIMIT_ERROR="ORDER_LIMIT_ERROR",t.NEGATIVE_QUANTITY_ERROR="NEGATIVE_QUANTITY_ERROR",t.INSUFFICIENT_STOCK_ERROR="INSUFFICIENT_STOCK_ERROR",t.COUPON_CODE_INVALID_ERROR="COUPON_CODE_INVALID_ERROR",t.COUPON_CODE_EXPIRED_ERROR="COUPON_CODE_EXPIRED_ERROR",t.COUPON_CODE_LIMIT_ERROR="COUPON_CODE_LIMIT_ERROR"}(Rw||(Rw={})),function(t){t.TRUE="TRUE",t.FALSE="FALSE",t.INHERIT="INHERIT"}(Nw||(Nw={})),function(t){t.CUSTOMER_REGISTERED="CUSTOMER_REGISTERED",t.CUSTOMER_VERIFIED="CUSTOMER_VERIFIED",t.CUSTOMER_DETAIL_UPDATED="CUSTOMER_DETAIL_UPDATED",t.CUSTOMER_ADDED_TO_GROUP="CUSTOMER_ADDED_TO_GROUP",t.CUSTOMER_REMOVED_FROM_GROUP="CUSTOMER_REMOVED_FROM_GROUP",t.CUSTOMER_ADDRESS_CREATED="CUSTOMER_ADDRESS_CREATED",t.CUSTOMER_ADDRESS_UPDATED="CUSTOMER_ADDRESS_UPDATED",t.CUSTOMER_ADDRESS_DELETED="CUSTOMER_ADDRESS_DELETED",t.CUSTOMER_PASSWORD_UPDATED="CUSTOMER_PASSWORD_UPDATED",t.CUSTOMER_PASSWORD_RESET_REQUESTED="CUSTOMER_PASSWORD_RESET_REQUESTED",t.CUSTOMER_PASSWORD_RESET_VERIFIED="CUSTOMER_PASSWORD_RESET_VERIFIED",t.CUSTOMER_EMAIL_UPDATE_REQUESTED="CUSTOMER_EMAIL_UPDATE_REQUESTED",t.CUSTOMER_EMAIL_UPDATE_VERIFIED="CUSTOMER_EMAIL_UPDATE_VERIFIED",t.CUSTOMER_NOTE="CUSTOMER_NOTE",t.ORDER_STATE_TRANSITION="ORDER_STATE_TRANSITION",t.ORDER_PAYMENT_TRANSITION="ORDER_PAYMENT_TRANSITION",t.ORDER_FULFILLMENT="ORDER_FULFILLMENT",t.ORDER_CANCELLATION="ORDER_CANCELLATION",t.ORDER_REFUND_TRANSITION="ORDER_REFUND_TRANSITION",t.ORDER_FULFILLMENT_TRANSITION="ORDER_FULFILLMENT_TRANSITION",t.ORDER_NOTE="ORDER_NOTE",t.ORDER_COUPON_APPLIED="ORDER_COUPON_APPLIED",t.ORDER_COUPON_REMOVED="ORDER_COUPON_REMOVED",t.ORDER_MODIFIED="ORDER_MODIFIED"}(Bw||(Bw={})),function(t){t.PENDING="PENDING",t.RUNNING="RUNNING",t.COMPLETED="COMPLETED",t.RETRYING="RETRYING",t.FAILED="FAILED",t.CANCELLED="CANCELLED"}(jw||(jw={})),function(t){t.af="af",t.ak="ak",t.am="am",t.ar="ar",t.as="as",t.az="az",t.be="be",t.bg="bg",t.bm="bm",t.bn="bn",t.bo="bo",t.br="br",t.bs="bs",t.ca="ca",t.ce="ce",t.co="co",t.cs="cs",t.cu="cu",t.cy="cy",t.da="da",t.de="de",t.de_AT="de_AT",t.de_CH="de_CH",t.dz="dz",t.ee="ee",t.el="el",t.en="en",t.en_AU="en_AU",t.en_CA="en_CA",t.en_GB="en_GB",t.en_US="en_US",t.eo="eo",t.es="es",t.es_ES="es_ES",t.es_MX="es_MX",t.et="et",t.eu="eu",t.fa="fa",t.fa_AF="fa_AF",t.ff="ff",t.fi="fi",t.fo="fo",t.fr="fr",t.fr_CA="fr_CA",t.fr_CH="fr_CH",t.fy="fy",t.ga="ga",t.gd="gd",t.gl="gl",t.gu="gu",t.gv="gv",t.ha="ha",t.he="he",t.hi="hi",t.hr="hr",t.ht="ht",t.hu="hu",t.hy="hy",t.ia="ia",t.id="id",t.ig="ig",t.ii="ii",t.is="is",t.it="it",t.ja="ja",t.jv="jv",t.ka="ka",t.ki="ki",t.kk="kk",t.kl="kl",t.km="km",t.kn="kn",t.ko="ko",t.ks="ks",t.ku="ku",t.kw="kw",t.ky="ky",t.la="la",t.lb="lb",t.lg="lg",t.ln="ln",t.lo="lo",t.lt="lt",t.lu="lu",t.lv="lv",t.mg="mg",t.mi="mi",t.mk="mk",t.ml="ml",t.mn="mn",t.mr="mr",t.ms="ms",t.mt="mt",t.my="my",t.nb="nb",t.nd="nd",t.ne="ne",t.nl="nl",t.nl_BE="nl_BE",t.nn="nn",t.ny="ny",t.om="om",t.or="or",t.os="os",t.pa="pa",t.pl="pl",t.ps="ps",t.pt="pt",t.pt_BR="pt_BR",t.pt_PT="pt_PT",t.qu="qu",t.rm="rm",t.rn="rn",t.ro="ro",t.ro_MD="ro_MD",t.ru="ru",t.rw="rw",t.sa="sa",t.sd="sd",t.se="se",t.sg="sg",t.si="si",t.sk="sk",t.sl="sl",t.sm="sm",t.sn="sn",t.so="so",t.sq="sq",t.sr="sr",t.st="st",t.su="su",t.sv="sv",t.sw="sw",t.sw_CD="sw_CD",t.ta="ta",t.te="te",t.tg="tg",t.th="th",t.ti="ti",t.tk="tk",t.to="to",t.tr="tr",t.tt="tt",t.ug="ug",t.uk="uk",t.ur="ur",t.uz="uz",t.vi="vi",t.vo="vo",t.wo="wo",t.xh="xh",t.yi="yi",t.yo="yo",t.zh="zh",t.zh_Hans="zh_Hans",t.zh_Hant="zh_Hant",t.zu="zu"}(qw||(qw={})),function(t){t.AND="AND",t.OR="OR"}(zw||(zw={})),function(t){t.Authenticated="Authenticated",t.CreateAdministrator="CreateAdministrator",t.CreateAsset="CreateAsset",t.CreateCatalog="CreateCatalog",t.CreateChannel="CreateChannel",t.CreateCollection="CreateCollection",t.CreateCountry="CreateCountry",t.CreateCustomer="CreateCustomer",t.CreateCustomerGroup="CreateCustomerGroup",t.CreateFacet="CreateFacet",t.CreateOrder="CreateOrder",t.CreatePaymentMethod="CreatePaymentMethod",t.CreateProduct="CreateProduct",t.CreatePromotion="CreatePromotion",t.CreateSettings="CreateSettings",t.CreateShippingMethod="CreateShippingMethod",t.CreateSystem="CreateSystem",t.CreateTag="CreateTag",t.CreateTaxCategory="CreateTaxCategory",t.CreateTaxRate="CreateTaxRate",t.CreateZone="CreateZone",t.DeleteAdministrator="DeleteAdministrator",t.DeleteAsset="DeleteAsset",t.DeleteCatalog="DeleteCatalog",t.DeleteChannel="DeleteChannel",t.DeleteCollection="DeleteCollection",t.DeleteCountry="DeleteCountry",t.DeleteCustomer="DeleteCustomer",t.DeleteCustomerGroup="DeleteCustomerGroup",t.DeleteFacet="DeleteFacet",t.DeleteOrder="DeleteOrder",t.DeletePaymentMethod="DeletePaymentMethod",t.DeleteProduct="DeleteProduct",t.DeletePromotion="DeletePromotion",t.DeleteSettings="DeleteSettings",t.DeleteShippingMethod="DeleteShippingMethod",t.DeleteSystem="DeleteSystem",t.DeleteTag="DeleteTag",t.DeleteTaxCategory="DeleteTaxCategory",t.DeleteTaxRate="DeleteTaxRate",t.DeleteZone="DeleteZone",t.Owner="Owner",t.Placeholder="Placeholder",t.Public="Public",t.ReadAdministrator="ReadAdministrator",t.ReadAsset="ReadAsset",t.ReadCatalog="ReadCatalog",t.ReadChannel="ReadChannel",t.ReadCollection="ReadCollection",t.ReadCountry="ReadCountry",t.ReadCustomer="ReadCustomer",t.ReadCustomerGroup="ReadCustomerGroup",t.ReadFacet="ReadFacet",t.ReadOrder="ReadOrder",t.ReadPaymentMethod="ReadPaymentMethod",t.ReadProduct="ReadProduct",t.ReadPromotion="ReadPromotion",t.ReadSettings="ReadSettings",t.ReadShippingMethod="ReadShippingMethod",t.ReadSystem="ReadSystem",t.ReadTag="ReadTag",t.ReadTaxCategory="ReadTaxCategory",t.ReadTaxRate="ReadTaxRate",t.ReadZone="ReadZone",t.SuperAdmin="SuperAdmin",t.UpdateAdministrator="UpdateAdministrator",t.UpdateAsset="UpdateAsset",t.UpdateCatalog="UpdateCatalog",t.UpdateChannel="UpdateChannel",t.UpdateCollection="UpdateCollection",t.UpdateCountry="UpdateCountry",t.UpdateCustomer="UpdateCustomer",t.UpdateCustomerGroup="UpdateCustomerGroup",t.UpdateFacet="UpdateFacet",t.UpdateGlobalSettings="UpdateGlobalSettings",t.UpdateOrder="UpdateOrder",t.UpdatePaymentMethod="UpdatePaymentMethod",t.UpdateProduct="UpdateProduct",t.UpdatePromotion="UpdatePromotion",t.UpdateSettings="UpdateSettings",t.UpdateShippingMethod="UpdateShippingMethod",t.UpdateSystem="UpdateSystem",t.UpdateTag="UpdateTag",t.UpdateTaxCategory="UpdateTaxCategory",t.UpdateTaxRate="UpdateTaxRate",t.UpdateZone="UpdateZone"}(Gw||(Gw={})),function(t){t.ASC="ASC",t.DESC="DESC"}(Yw||(Yw={})),function(t){t.ADJUSTMENT="ADJUSTMENT",t.ALLOCATION="ALLOCATION",t.RELEASE="RELEASE",t.SALE="SALE",t.CANCELLATION="CANCELLATION",t.RETURN="RETURN"}($w||($w={}));class Uw{constructor(t){this.baseDataService=t}searchProducts(t,e=10,n=0){return this.baseDataService.query(t_,{input:{term:t,take:e,skip:n,groupByProduct:!0}})}productSelectorSearch(t,e){return this.baseDataService.query(e_,{take:e,term:t})}reindex(){return this.baseDataService.mutate(uC)}getPendingSearchIndexUpdates(){return this.baseDataService.query(hC)}runPendingSearchIndexUpdates(){return this.baseDataService.mutate(dC)}getProducts(t){return this.baseDataService.query($C,{options:t})}getProduct(t,e){return this.baseDataService.query(GC,{id:t,variantListOptions:e})}getProductSimple(t){return this.baseDataService.query(YC,{id:t})}getProductVariantsSimple(t,e){return this.baseDataService.query(h_,{options:t,productId:e})}getProductVariants(t,e){return this.baseDataService.query(d_,{options:t,productId:e})}getProductVariant(t){return this.baseDataService.query(u_,{id:t})}getProductVariantsOptions(t){return this.baseDataService.query(s_,{id:t})}getProductOptionGroup(t){return this.baseDataService.query(BC,{id:t})}createProduct(t){const e={input:(0,re.e)(t,["enabled","translations","customFields","assetIds","featuredAssetId","facetValueIds"])};return this.baseDataService.mutate(PC,e)}updateProduct(t){const e={input:(0,re.e)(t,["id","enabled","translations","customFields","assetIds","featuredAssetId","facetValueIds"])};return this.baseDataService.mutate(DC,e)}deleteProduct(t){return this.baseDataService.mutate(HC,{id:t})}createProductVariants(t){return this.baseDataService.mutate(FC,{input:t})}updateProductVariants(t){const e={input:t.map((0,re.e)(["id","enabled","translations","sku","price","taxCategoryId","facetValueIds","featuredAssetId","assetIds","trackInventory","outOfStockThreshold","useGlobalOutOfStockThreshold","stockOnHand","customFields"]))};return this.baseDataService.mutate(RC,e)}deleteProductVariant(t){return this.baseDataService.mutate(i_,{id:t})}createProductOptionGroups(t){const e={input:t};return this.baseDataService.mutate(NC,e)}addOptionGroupToProduct(t){return this.baseDataService.mutate(qC,t)}addOptionToGroup(t){return this.baseDataService.mutate(jC,{input:t})}removeOptionGroupFromProduct(t){return this.baseDataService.mutate(zC,t)}updateProductOption(t){return this.baseDataService.mutate(r_,{input:(0,re.e)(t,["id","code","translations","customFields"])})}updateProductOptionGroup(t){return this.baseDataService.mutate(n_,{input:(0,re.e)(t,["id","code","translations","customFields"])})}getProductOptionGroups(t){return this.baseDataService.query(UC,{filterTerm:t})}getAssetList(t=10,e=0){return this.baseDataService.query(JC,{options:{skip:e,take:t,sort:{createdAt:Yw.DESC}}})}getAsset(t){return this.baseDataService.query(QC,{id:t})}createAssets(t){return this.baseDataService.mutate(WC,{input:t.map(t=>({file:t}))})}updateAsset(t){return this.baseDataService.mutate(KC,{input:t})}deleteAssets(t,e){return this.baseDataService.mutate(XC,{input:{assetIds:t,force:e}})}assignProductsToChannel(t){return this.baseDataService.mutate(o_,{input:t})}removeProductsFromChannel(t){return this.baseDataService.mutate(l_,{input:t})}assignVariantsToChannel(t){return this.baseDataService.mutate(a_,{input:t})}removeVariantsFromChannel(t){return this.baseDataService.mutate(c_,{input:t})}getTag(t){return this.baseDataService.query(f_,{id:t})}getTagList(t){return this.baseDataService.query(p_,{options:t})}createTag(t){return this.baseDataService.mutate(g_,{input:t})}updateTag(t){return this.baseDataService.mutate(m_,{input:t})}deleteTag(t){return this.baseDataService.mutate(v_,{id:t})}}const Jw=K.Ps`
    fragment Promotion on Promotion {
        id
        createdAt
        updatedAt
        name
        enabled
        couponCode
        perCustomerUsageLimit
        startsAt
        endsAt
        conditions {
            ...ConfigurableOperation
        }
        actions {
            ...ConfigurableOperation
        }
    }
    ${Vy}
`,Qw=K.Ps`
    query GetPromotionList($options: PromotionListOptions) {
        promotions(options: $options) {
            items {
                ...Promotion
            }
            totalItems
        }
    }
    ${Jw}
`,Ww=K.Ps`
    query GetPromotion($id: ID!) {
        promotion(id: $id) {
            ...Promotion
        }
    }
    ${Jw}
`,Kw=K.Ps`
    query GetAdjustmentOperations {
        promotionConditions {
            ...ConfigurableOperationDef
        }
        promotionActions {
            ...ConfigurableOperationDef
        }
    }
    ${Ey}
`,Xw=K.Ps`
    mutation CreatePromotion($input: CreatePromotionInput!) {
        createPromotion(input: $input) {
            ...Promotion
            ...ErrorResult
        }
    }
    ${Jw}
    ${Ty}
`,tS=K.Ps`
    mutation UpdatePromotion($input: UpdatePromotionInput!) {
        updatePromotion(input: $input) {
            ...Promotion
        }
    }
    ${Jw}
`,eS=K.Ps`
    mutation DeletePromotion($id: ID!) {
        deletePromotion(id: $id) {
            result
            message
        }
    }
`;class nS{constructor(t){this.baseDataService=t}getPromotions(t=10,e=0,n){return this.baseDataService.query(Qw,{options:{take:t,skip:e,filter:n}})}getPromotion(t){return this.baseDataService.query(Ww,{id:t})}getPromotionActionsAndConditions(){return this.baseDataService.query(Kw)}createPromotion(t){return this.baseDataService.mutate(Xw,{input:t})}updatePromotion(t){return this.baseDataService.mutate(tS,{input:t})}deletePromotion(t){return this.baseDataService.mutate(eS,{id:t})}}class rS{constructor(t){this.baseDataService=t}getCountries(t=10,e=0,n){return this.baseDataService.query(ib,{options:{take:t,skip:e,filter:{name:n?{contains:n}:null}}})}getAvailableCountries(){return this.baseDataService.query(sb)}getCountry(t){return this.baseDataService.query(ob,{id:t})}createCountry(t){return this.baseDataService.mutate(ab,{input:(0,re.e)(t,["code","enabled","translations","customFields"])})}updateCountry(t){return this.baseDataService.mutate(lb,{input:(0,re.e)(t,["id","code","enabled","translations","customFields"])})}deleteCountry(t){return this.baseDataService.mutate(cb,{id:t})}getZones(){return this.baseDataService.query(hb)}getZone(t){return this.baseDataService.query(hb,{id:t})}createZone(t){return this.baseDataService.mutate(db,{input:t})}updateZone(t){return this.baseDataService.mutate(pb,{input:t})}deleteZone(t){return this.baseDataService.mutate(fb,{id:t})}addMembersToZone(t,e){return this.baseDataService.mutate(gb,{zoneId:t,memberIds:e})}removeMembersFromZone(t,e){return this.baseDataService.mutate(mb,{zoneId:t,memberIds:e})}getTaxCategories(){return this.baseDataService.query(yb)}getTaxCategory(t){return this.baseDataService.query(bb,{id:t})}createTaxCategory(t){return this.baseDataService.mutate(Cb,{input:t})}updateTaxCategory(t){return this.baseDataService.mutate(_b,{input:t})}deleteTaxCategory(t){return this.baseDataService.mutate(wb,{id:t})}getTaxRates(t=10,e=0,n){return this.baseDataService.query(Ab,{options:{take:t,skip:e}},n)}getTaxRatesSimple(t=10,e=0,n){return this.baseDataService.query(xb,{options:{take:t,skip:e}},n)}getTaxRate(t){return this.baseDataService.query(Mb,{id:t})}createTaxRate(t){return this.baseDataService.mutate(Ib,{input:t})}updateTaxRate(t){return this.baseDataService.mutate(Lb,{input:t})}deleteTaxRate(t){return this.baseDataService.mutate(kb,{id:t})}getChannels(){return this.baseDataService.query(Vb)}getChannel(t){return this.baseDataService.query(Eb,{id:t})}getActiveChannel(t){return this.baseDataService.query(Tb,{},t)}createChannel(t){return this.baseDataService.mutate(Zb,{input:t})}updateChannel(t){return this.baseDataService.mutate(Db,{input:t})}deleteChannel(t){return this.baseDataService.mutate(Pb,{id:t})}getPaymentMethods(t=10,e=0){return this.baseDataService.query(Fb,{options:{skip:e,take:t}})}getPaymentMethod(t){return this.baseDataService.query(Nb,{id:t})}createPaymentMethod(t){return this.baseDataService.mutate(Bb,{input:t})}updatePaymentMethod(t){return this.baseDataService.mutate(jb,{input:t})}deletePaymentMethod(t,e){return this.baseDataService.mutate(qb,{id:t,force:e})}getPaymentMethodOperations(){return this.baseDataService.query(Rb)}getGlobalSettings(t){return this.baseDataService.query(Gb,void 0,t)}updateGlobalSettings(t){return this.baseDataService.mutate(Yb,{input:t})}getJob(t){return this.baseDataService.query(sC,{id:t})}pollJobs(t){return this.baseDataService.query(aC,{ids:t})}getAllJobs(t){return this.baseDataService.query(oC,{options:t},"cache-first")}getJobQueues(){return this.baseDataService.query(lC)}getRunningJobs(){return this.baseDataService.query(oC,{options:{filter:{state:{eq:jw.RUNNING}}}})}cancelJob(t){return this.baseDataService.mutate(cC,{id:t})}}const iS=K.Ps`
    fragment ShippingMethod on ShippingMethod {
        id
        createdAt
        updatedAt
        code
        name
        description
        fulfillmentHandlerCode
        checker {
            ...ConfigurableOperation
        }
        calculator {
            ...ConfigurableOperation
        }
        translations {
            id
            languageCode
            name
            description
        }
    }
    ${Vy}
`,sS=K.Ps`
    query GetShippingMethodList($options: ShippingMethodListOptions) {
        shippingMethods(options: $options) {
            items {
                ...ShippingMethod
            }
            totalItems
        }
    }
    ${iS}
`,oS=K.Ps`
    query GetShippingMethod($id: ID!) {
        shippingMethod(id: $id) {
            ...ShippingMethod
        }
    }
    ${iS}
`,aS=K.Ps`
    query GetShippingMethodOperations {
        shippingEligibilityCheckers {
            ...ConfigurableOperationDef
        }
        shippingCalculators {
            ...ConfigurableOperationDef
        }
        fulfillmentHandlers {
            ...ConfigurableOperationDef
        }
    }
    ${Ey}
`,lS=K.Ps`
    mutation CreateShippingMethod($input: CreateShippingMethodInput!) {
        createShippingMethod(input: $input) {
            ...ShippingMethod
        }
    }
    ${iS}
`,cS=K.Ps`
    mutation UpdateShippingMethod($input: UpdateShippingMethodInput!) {
        updateShippingMethod(input: $input) {
            ...ShippingMethod
        }
    }
    ${iS}
`,uS=K.Ps`
    mutation DeleteShippingMethod($id: ID!) {
        deleteShippingMethod(id: $id) {
            result
            message
        }
    }
`,hS=K.Ps`
    query TestShippingMethod($input: TestShippingMethodInput!) {
        testShippingMethod(input: $input) {
            eligible
            quote {
                price
                priceWithTax
                metadata
            }
        }
    }
`,dS=K.Ps`
    query TestEligibleShippingMethods($input: TestEligibleShippingMethodsInput!) {
        testEligibleShippingMethods(input: $input) {
            id
            name
            code
            description
            price
            priceWithTax
            metadata
        }
    }
//# sourceMappingURL=main-es2015.3d0b8c134f03e5d47666.js.map