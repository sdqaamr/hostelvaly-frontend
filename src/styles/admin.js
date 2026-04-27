import { StyleSheet } from 'react-native'
import { colors } from '@constants/global'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC'
  },

  container: {
    flex: 1,
    padding: 20
  },

  /* ===== HEADER ===== */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },

  welcomeText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A'
  },

  roleTextHeading: {
    fontSize: 13,
    marginTop: 2,
    color: '#64748B'
  },

  profileContainer: {
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 15
  },

  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24
  },

  /* ===== STATS ===== */
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24
  },

  statBox: {
    width: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 2
  },

  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 6
  },

  statLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2
  },

  /* ===== CARDS ===== */
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 22,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2
  },

  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    textAlign: 'center'
  },

  quickToolsContainer: {
    marginTop: 10,
    marginBottom: 20
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 10,
    paddingLeft: 5
  },

  quickToolsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  quickTool: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    width: '48%',
    elevation: 2,
    gap: 8
  },

  quickToolText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B'
  },

  /* ===== LOGOUT ===== */
  logoutButton: {
    marginTop: 'auto',
    backgroundColor: '#DC2626',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },

  /* ===== PROFILE UI ===== */

  profileTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  backBtn: {
    backgroundColor: colors.backButton,
    padding: 8,
    borderRadius: 10
  },

  profileTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A'
  },

  profileCardEnhanced: {
    alignItems: 'center',
    marginBottom: 15
  },

  avatarWrapper: {
    position: 'relative'
  },

  avatarLarge: {
    width: 95,
    height: 95,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.textInput
  },

  changeAvatarBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary,
    padding: 6,
    borderRadius: 20
  },

  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 10
  },

  roleBadge: {
    marginTop: 6,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20
  },

  roleText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '600'
  },

  infoCardModern: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 17,
    marginBottom: 20,
    elevation: 3,
    paddingVertical: 14
  },

  infoItemModern: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
  },

  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },

  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#8100d1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  infoLabelModern: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500'
  },

  infoValueModern: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F172A',
    maxWidth: '55%',
    textAlign: 'right'
  },

  primaryActionBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    gap: 8
  },

  primaryActionText: {
    color: '#fff',
    fontWeight: '600'
  },

  secondaryActionBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    gap: 8
  },

  secondaryActionText: {
    color: colors.primary,
    fontWeight: '600'
  },

  logoutBtn: {
    marginTop: 'auto',
    backgroundColor: '#DC2626',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 84
  },

  logoutText: {
    color: '#fff',
    fontWeight: '600'
  },

  /* ===== MANAGE USERS ===== */

  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },

  pageTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A'
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 16,
    elevation: 2
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#0F172A'
  },

  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    elevation: 2
  },

  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24
  },

  userInfo: {
    flex: 1,
    marginLeft: 12
  },

  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A'
  },

  userEmail: {
    fontSize: 12,
    color: '#64748B',
    marginVertical: 2
  },

  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginTop: 4
  },

  statusText: {
    fontSize: 10,
    fontWeight: '600'
  },

  userActions: {
    flexDirection: 'row',
    gap: 10
  },

  actionIconBtn: {
    backgroundColor: colors.pills,
    padding: 8,
    borderRadius: 10
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center'
  },

  closeBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 5
  },

  modalAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },

  modalName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A'
  },

  modalEmail: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 10
  },

  modalInfoBox: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F8FAFC',
    borderRadius: 10
  },

  modalInfoText: {
    fontSize: 13,
    color: '#0F172A',
    marginBottom: 4
  },

  infoRowModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9'
  },

  infoLabelModal: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500'
  },

  infoValueModal: {
    fontSize: 13,
    color: '#0F172A',
    fontWeight: '600',
    maxWidth: '60%',
    textAlign: 'right'
  },

  infoLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },

  iconCircleSmall: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#8100d1',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
